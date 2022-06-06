import { useEffect, useState } from 'react';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { AppContext } from 'contexts';
import { ToastContainer } from 'react-toastify';
import AppWrapper from 'hoc/AppWrapper';
import { theme } from 'styles/theme';
import usePersistState from 'hooks/usePersistState';
import { getTotalSupply } from 'utils/web3';
import LiveChat from 'react-livechat';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

const getLibrary = provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};

function MyApp({ Component, pageProps }) {
  const [themeType, themeChange] = usePersistState('dark', 'theme-type');
  const [isWalletModalOpened, setIsWalletModalOpened] = useState(false);
  const [balanceData, setBalanceData] = useState({});
  const [totalSupply, setTotalSupply] = useState();
  const [balance, setBalance] = useState(0);

  async function loadNFTStatus() {
    const totalSupply = await getTotalSupply();
    setTotalSupply(totalSupply);
  }

  useEffect(() => {
    loadNFTStatus();
  }, []);

  const isClientSide = typeof window !== 'undefined';

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Sea Inu</title>
        <meta name='description' content='SeaInu' />
        <meta
          name='keywords'
          content='Sea Inu SeaInu NFT ethereum ETH crypto token Presale ERC20 ERC721 IPFS'
        />
        <link rel='icon' href='/favicon.png' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={'https://seainu.org'} />
        <meta property='og:title' content={'Sea Inu'} />
        <meta
          property='og:description'
          content={'Sea Inu is a decentralized ERC-20 Cryptocurrency token.'}
        />
        <meta property='og:image' content={'/img/banner.jpg'} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='628' />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={'https://seainu.org'} />
        <meta property='twitter:title' content={'Sea Inu'} />
        <meta
          property='twitter:description'
          content={'Sea Inu is a decentralized ERC-20 Cryptocurrency token.'}
        />
        <meta property='twitter:image' content={'/img/banner.jpg'} />
      </Head>
      <CssBaseline />
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
      <Web3ReactProvider getLibrary={getLibrary}>
        <AppContext.Provider
          value={{
            themeType,
            themeChange,
            isWalletModalOpened,
            setIsWalletModalOpened,
            balanceData,
            setBalanceData,
            totalSupply,
            setTotalSupply,
            balance,
            setBalance,
          }}>
          <AppWrapper>
            <Component {...pageProps} />
          </AppWrapper>
        </AppContext.Provider>
      </Web3ReactProvider>
    </ThemeProvider>
  );
}

export default MyApp;
