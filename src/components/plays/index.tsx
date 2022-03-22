import { Bloc, Container, Person } from "./styles";
import jade from "../../assets/rosto1.png";

import { useState } from "react";
import { ModalChange } from "../modalChange";


export function Plays() {
    const [isModalChange, setIsModalChange] = useState(false);

    function handleModalChange() {
        setIsModalChange(true);
    }

    function handleCloseModalChange() {
        setIsModalChange(false);
    }

    return (
        <Container>
            <Bloc>
                <div>
                    <Person>
                        <h2>Jade</h2>
                        <img src={jade} alt="jade" />
                    </Person>
                </div>
                <div>
                    <Person>
                        <h2>Lais</h2>
                        <img src={jade} alt="jade" />
                    </Person>
                </div>
                <div>
                    <Person>
                        <h2>Rodrigo</h2>
                        <img src={jade} alt="jade" />
                    </Person>
                </div>
                <div>
                    <Person>
                        <h2>Luana</h2>
                        <img src={jade} alt="jade" />
                    </Person>
                </div>
            </Bloc>
            <div>
                <button type="button" onClick={handleModalChange} >
                    Selecionar
                </button>
            </div>
            <ModalChange isOpen={isModalChange} onRequestClose={handleCloseModalChange} />
        </Container>
    );
}