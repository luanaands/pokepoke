import styled from "styled-components";

export const Container = styled.div`
   display: flex;
  align-items: center;
  justify-content: center;
button {
   font-size: 2rem;
   color: #fff;
   background: var(--color-button);
   border: 0;
   margin: 0 4rem;
   padding: 0 2rem;
   border-radius: 0.25rem;
   height: 3rem;
   transition: filter 0.2s;

   &:hover{
       filter: brightness(0.9);
   }
}
`

export const Bloc = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 2rem;
    padding: 0 0 2rem 2rem;

    div {
        background: var( --shape);
        color: var(--color-text-secondary);
        border-radius: 0.35rem;
        padding: 1rem 1rem;
        text-align: center;
    }

    h2{
        font-weight: 600;
        padding: 1rem 1rem;
    }
`

export const Colletion = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
`

