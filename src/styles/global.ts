import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  html {
    font-size: 16px;
  }

  body {
    font-size: 16px;
    background-color: #141414;
    color: white;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }
`;

export { GlobalStyle };
