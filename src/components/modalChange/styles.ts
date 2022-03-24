import styled from "styled-components";

export const Container = styled.form`
   text-align: center;
   div.align {
      padding: 0 1rem;
      color: var(--color-secondary-clik);
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   button {
   font-size: 1rem;
   color: #fff;
   background: var(--color-button);
   border: 0;
   padding: 0 2rem;
   border-radius: 0.25rem;
   height: 2rem;
   margin-top: 0.2rem;
   transition: filter 0.2s;
   font-weight: 400;
   &:hover{
    filter: brightness(0.9);
   }
}
button:disabled{ 
    background:  gray;
   cursor: none;
}
`
