import Modal from "react-modal";
import { usePokemon } from "../../hooks/usePokemons";
import { Collection } from "../collection";
import { Container } from "./styles";
import bola from "../../assets/poke-aberto.png";
import { api } from "../../services/api";
import { FormEvent } from "react";

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
    const { addPokemons, selectedPokemons, limpaLista } = usePokemon();

    function handleSelectedCard(pokemon: Pokemons) {
        addPokemons(pokemon);
    }

    function onSubmitChange(event: FormEvent) {
        event.preventDefault();
        api.post("/change", selectedPokemons)
            .then(response => console.log(response))
            .catch(error => {
                alert("Não foi possível realizar a troca");
            });
            
        limpaLista();
        onRequestClose();
    }

    return (
        <Modal isOpen={isOpen} ariaHideApp={false} onRequestClose={onRequestClose} >
            <Container onSubmit={onSubmitChange} >
                <div className="align">
                    <h2>Selecionar</h2>
                    <img onClick={onRequestClose} width="30" height="30" src={bola} alt="close" title="Fechar" ></img>
                </div>
                {
                    users.map(user => (
                        <Collection key={user.id} user={user} onRequestSelected={handleSelectedCard} />
                    ))
                }
                <button type="submit" disabled={
                    selectedPokemons.map(pokemon => pokemon.userId).length < 2 ? true : false

                }>Trocar</button>
            </Container>
        </Modal>
    );
}