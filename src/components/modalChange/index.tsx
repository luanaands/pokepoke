import { toNamespacedPath } from "path";
import { useState } from "react";
import Modal from "react-modal";
import { Collection } from "../collection";
import { Container } from "./styles";

interface ModalChangeProps {
    names: string[];
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ModalChange({ names, isOpen, onRequestClose }: ModalChangeProps) {
    const [selectedPokemons, setSelectedPokemons] = useState([]);

    return (
        <Modal isOpen={isOpen} ariaHideApp={false} onRequestClose={onRequestClose} >
            <Container>
                <div className="align">
                    <h2>Selecionar Pokemons</h2>
                    <p>Fechar</p>
                </div>
                {
                    names.map(name => (
                        <Collection key={name} name={name} />
                    ))
                }
                <button>Trocar</button>
            </Container>
        </Modal>
    );
}