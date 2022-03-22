import styled from "styled-components";

export const Container = styled.div`
background: var(--shape);  
border-radius: 0.35rem;
border: 0;
padding: 0.5rem;
display: flex;
align-items: center;
flex-direction: column;
color: var(--color-primary);
transition: filter 0.2s;
&:hover{
    filter: opacity(0.6);
}

p {
    margin-top: 0.5rem;
    font-weight: 500;
}

`

