import styled from "styled-components";

export const Container = styled.div`
border-radius: 0.35rem;
border: 0;
padding: 0.5rem;
display: flex;
align-items: center;
flex-direction: column;
color: var(--color-primary);
transition:  0.2s;

&:hover {
  filter: sepia(0.2);
}

p {
    margin-top: 0.5rem;
    font-weight: 500;
}


`

