import css from 'styled-jsx/css';

export default css.global`
  html {
    font-size: 100% !important;
    color: white !important;
  }

  body {
    min-height: 100vh;
    width: 100%;
  }
  @font-face {
    font-family: 'Rockwell';
    src: url('./fonts/Rockwell.ttf');
  }
`;
