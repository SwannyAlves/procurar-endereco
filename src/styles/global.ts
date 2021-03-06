import { createGlobalStyle } from 'styled-components'
import bg from '../assets/bg.svg'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --blueDark: #012340;
  

  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    @media (max-width: 1080px) {
      font-size : 93.75%;
    }
    @media (max-width: 720px) {
      font-size : 85.5%;
    }
  }
  body {
    background-image: url(${bg});
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background-color: #f0f2f5;
    &:focus {
    outline: none;
    }
  }


  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button {
    cursor: pointer;
    border: none;
  }

  [disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

`