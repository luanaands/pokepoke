import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   :root {
        --background: #f7f7f7;
        --color-primary:##ff1c1c;
        --color-secondary:#1d2c5e;
        --color-button: #ffcb05;
        --color-text: #fff;
        --color-text-secondary: #3466af;
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
    background: var(--background);
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