import { createContext, ReactNode, useContext, useState } from "react";

interface Pokemons {
    id: number;
    name: string;
    userId: number;
    pokemonId: number;
    url: string;
}

interface PokemonsContextProps {
    children: ReactNode;
}

interface PokemonsContextData {
    selectedPokemons: Pokemons[];
    addPokemons: (pokemon: Pokemons) => void;
    limpaLista: () => void;
}

const PokemonContext = createContext<PokemonsContextData>({} as PokemonsContextData);

export function PokemonsProvider({ children }: PokemonsContextProps) {
    const [selectedPokemons, setSelectedPokemons] = useState<Pokemons[]>([]);

    function limpaLista() {
        setSelectedPokemons([]);
    }

    function addPokemons(pokemon: Pokemons) {
        if (selectedPokemons.includes(pokemon)) {
            setSelectedPokemons(selectedPokemons.filter(poke => poke !== pokemon));
        } else {
            if (selectedPokemons.filter(poke => poke.userId === pokemon.userId).length < 6
                && !(selectedPokemons.filter(poke => poke.pokemonId === pokemon.pokemonId).length > 0)) {
                setSelectedPokemons([...selectedPokemons, pokemon]);
            }
        }
    }

    return (
        <PokemonContext.Provider value={{ selectedPokemons, addPokemons, limpaLista }}  >
            {children}
        </PokemonContext.Provider>
    );
}

export function usePokemon() {
    return useContext(PokemonContext);
}