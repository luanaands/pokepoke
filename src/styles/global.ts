import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   :root {
        --color-primary: #ffcb05;
        --color-secondary: #3466af;
        --color-button: #1d2c5e;
        --color-text: #f0f2f5;
        --color-text-secondary: #ed0c19;
        --shape: #ffffff;
   }

   *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }

   html{
      @media (max-width: 1080px) {
         font-size: 93.55%;
      }
      @media (max-width: 720px) {
         font-size: 87.5%;
      }
   }
   
   body {
    background: var(--color-primary);
    -webkit-font-smoothing: antialiased;
   }

   body, input, textarea , button {
      font-family: 'Poppins', sans-serif;
      font-weight:400;
   }

   h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
   }

   button {
      cursor: pointer;
   }

   [disabled]{
      opacity: 0.6;
      cursor: not-allowed;
   }
`