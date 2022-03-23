import { Container } from "./styles";
import { darken } from "polished";
import { usePokemon } from "../../hooks/usePokemons";

interface Pokemons {
    id: number;
    name: string;
    userId: number;
    pokemonId: number;
    url: string;
}

interface CardProps {
    pokemon: Pokemons;
    onRequestSelected: () => void;
}
export function Card({ pokemon, onRequestSelected }: CardProps) {
    const { selectedPokemons } = usePokemon();
    return (
        <Container style={{ background: selectedPokemons.includes(pokemon) ? "#ffffff" : darken(0.2, "#ffffff") }} onClick={onRequestSelected}>
            <img src={pokemon.url} alt={pokemon.name} width="60" height="80" />
            <p>{pokemon.name}</p>
        </Container>
    )
}