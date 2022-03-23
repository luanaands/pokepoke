import { useEffect, useState } from "react";
import { Card } from "../card";
import { Container } from "./styles";

interface Pokemons {
    id: number;
    name: string;
}

interface CollectionProps {
    name: string;
}

export function Collection({ name }: CollectionProps) {
    const [selectedPokemons, setSelectedPokemons] = useState<number[]>([]);
    const [pokemons, setPokemons] = useState<Pokemons[]>([]);

    useEffect(() => {
        const poke = {
            id: 1,
            name: "Pikachu"
        }
        setPokemons([...pokemons, poke]);
    }, [])

    function handleSelectedCard(int: number) {
        console.log(int);
    }
    return (
        <Container>
            <h3>{name}</h3>
            <div className="card">
                {pokemons.map(pokemon => (
                    <Card key={pokemon.id} pokemon={pokemon} onRequestSelected={() => handleSelectedCard(pokemon.id)} />
                ))}
            </div>
        </Container>
    )
}