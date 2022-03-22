import pika from "../../assets/manectric.png";
import { Container } from "./styles";
export function Card() {
    return (
        <Container>
            <img src={pika} alt="pokemon" width="60" height="80" />
            <p>Nome</p>
        </Container>
    )
}