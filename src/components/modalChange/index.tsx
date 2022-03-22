import Modal from "react-modal";
import { Collection } from "../collection";
import { Container } from "./styles";

interface ModalChangeProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ModalChange({ isOpen, onRequestClose }: ModalChangeProps) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} >
            <Container>
                <div className="align">
                    <h2>Selecionar Pokemons</h2>
                    <p>Fechar</p>
                </div>
                <Collection />
                <Collection />
                <button>Trocar</button>
            </Container>
        </Modal>
    );
}