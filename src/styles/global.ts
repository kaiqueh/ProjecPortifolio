import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    outline: 0;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
      font-size: 55%;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
      font-size: 50%;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.white};
    overflow-x: hidden;
  }
`;
