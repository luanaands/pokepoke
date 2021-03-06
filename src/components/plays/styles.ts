import styled from "styled-components";

export const Container = styled.div`
   display: flex;
    align-items: center;
    flex-direction: column;
  button {
   font-size: 2rem;
   color: #fff;
   background: var(--color-button);
   border: 0;
   padding: 0 2rem;
   border-radius: 0.25rem;
   height: 3rem;
   transition: filter 0.2s;
font-weight: 500;
   &:hover{
    filter: brightness(0.9);
   }
}
button:disabled{ 
    background:  gray;
   cursor: none;
}

`

export const Bloc = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 2rem;
    padding: 2rem 5rem;

    @media (max-width: 720px) {
        padding: 2rem 0;

      }

    div {
        background: var(--color-secondary);
        color: var(--shape);
        border-radius: 0.35rem;
        text-align: center;
        transition: 0.2s;
        &:hover{
            background: var(--color-secondary-clik);
        }
    }

    h2{
        font-weight: 600;
    }
   
`

export const Person = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
`