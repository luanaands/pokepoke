import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../card";
import { Container } from "./styles";

interface Pokemons {
    id: number;
    name: string;
    userId: number;
    pokemonId: number;
    url: string;
}

interface Uses {
    id: number;
    name: string;
}

interface CollectionProps {
    user: Uses;
    onRequestSelected: (pokemon: Pokemons) => void;
}

export function Collection({ user, onRequestSelected }: CollectionProps) {
    const [pokemons, setPokemons] = useState<Pokemons[]>([]);

    useEffect(() => {
        api(`/pokemons/${user.id}`)
            .then(response => response)
            .then(data => setPokemons(data.data));
    }, [user])


    return (
        <Container>
            <h3>{user.name}</h3>
            <div className="card">
                {pokemons.map(pokemon => (
                    <Card key={pokemon.id} pokemon={pokemon} onRequestSelected={() => onRequestSelected(pokemon)} />
                ))}
            </div>
        </Container>
    )
}