import pika from "../../assets/manectric.png";
import { Container } from "./styles";

interface Pokemons {
    id: number;
    name: string;
}
interface CardProps {
    pokemon: Pokemons;
    onRequestSelected: () => void;
}
export function Card({ pokemon, onRequestSelected }: CardProps) {
    return (
        <Container onClick={onRequestSelected}>
            <img src={pika} alt={pokemon.name} width="60" height="80" />
            <p>{pokemon.name}</p>
        </Container>
    )
}