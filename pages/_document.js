import { Fragment } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

import globalStyles from '../styles/global';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style jsx global>
            {globalStyles}
          </style>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap'
            rel='stylesheet'></link>
          {/* <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap'
            rel='stylesheet'></link> */}
        </Head>
        <noscript>Please enable Javascript to continue using this application.</noscript>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <Fragment key='styles'>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </Fragment>,
    ],
  };
};

export default MyDocument;
