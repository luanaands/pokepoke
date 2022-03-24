import styled from "styled-components";

export const Container = styled.section`
        border-radius: 0.35rem;
        border: 0;
        margin-top: 1rem;
        background: var(--color-secondary);  
        padding: 1rem;
        color: var(--color-button);
        text-align: center;
        div.card{
                display: grid;
                grid-template-columns: repeat(6, 1fr);
                gap: 2rem;

                @media (max-width: 720px) {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1rem;
      }

        }

        h3 {
                margin-bottom: 0.2rem;
        }
`


