import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smooth: antialiased;
  }

  html, body, #__next {
    width: 100%;
    min-height: 100vh;
  }

  body {
    display: flex;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyles;
