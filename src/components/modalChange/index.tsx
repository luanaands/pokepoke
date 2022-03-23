import Modal from "react-modal";
import { usePokemon } from "../../hooks/usePokemons";
import { Collection } from "../collection";
import { Container } from "./styles";

interface Users {
    id: number;
    name: string;
}

interface Pokemons {
    id: number;
    name: string;
    userId: number;
    pokemonId: number;
    url: string;
}

interface ModalChangeProps {
    users: Users[];
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ModalChange({ users, isOpen, onRequestClose }: ModalChangeProps) {
    const { addPokemons, selectedPokemons } = usePokemon();

    function handleSelectedCard(pokemon: Pokemons) {
        addPokemons(pokemon);
    }

    return (
        <Modal isOpen={isOpen} ariaHideApp={false} onRequestClose={onRequestClose} >
            <Container>
                <div className="align">
                    <h2>Selecionar Pokemons</h2>
                    <p>Fechar</p>
                </div>
                {
                    users.map(user => (
                        <Collection key={user.id} user={user} onRequestSelected={handleSelectedCard} />
                    ))
                }
                <button disabled={
                    selectedPokemons.map(pokemon => pokemon.userId).length < 2 ? true : false

                }>Trocar</button>
            </Container>
        </Modal>
    );
}