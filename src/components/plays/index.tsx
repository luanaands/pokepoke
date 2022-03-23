import { Bloc, Container, Person } from "./styles";
import jade from "../../assets/rosto1.png";

import { useState } from "react";
import { ModalChange } from "../modalChange";


export function Plays() {
    const [isModalChange, setIsModalChange] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState<string[]>([]);
    function handleModalChange() {
        setIsModalChange(true);
    }

    function handleCloseModalChange() {
        setIsModalChange(false);
    }

    function handleSetSelectedName(name: string) {
        console.log(selectedPerson);
        if (selectedPerson.includes(name)) {
            setSelectedPerson(selectedPerson.filter(person => person !== name));
        } else {
            const qtd = selectedPerson.length;
            if (qtd < 2) {
                setSelectedPerson([...selectedPerson, name]);
            }
        }
    }

    return (
        <Container>
            <Bloc>
                <div>
                    <Person style={{ background: selectedPerson.includes("Jade") ? "#3466af" : "#1d2c5e" }} onClick={() => handleSetSelectedName("Jade")}>
                        <h2>Jade</h2>
                        <img src={jade} alt="jade" />
                    </Person>
                </div>
                <div>
                    <Person style={{ background: selectedPerson.includes("Lais") ? "#3466af" : "#1d2c5e" }} onClick={() => handleSetSelectedName("Lais")}>
                        <h2>Lais</h2>
                        <img src={jade} alt="Lais" />
                    </Person>
                </div>
                <div>
                    <Person style={{ background: selectedPerson.includes("Rodrigo") ? "#3466af" : "#1d2c5e" }} onClick={() => handleSetSelectedName("Rodrigo")}>
                        <h2>Rodrigo</h2>
                        <img src={jade} alt="Rodrigo" />
                    </Person>
                </div>
                <div>
                    <Person style={{ background: selectedPerson.includes("Luana") ? "#3466af" : "#1d2c5e" }} onClick={() => handleSetSelectedName("Luana")}>
                        <h2>Luana</h2>
                        <img src={jade} alt="Luana" />
                    </Person>
                </div>
            </Bloc>
            <div>
                <button disabled={selectedPerson.length != 2 ? true : false} type="button" onClick={handleModalChange} >
                    Selecionar
                </button>
            </div>
            <ModalChange names={selectedPerson} isOpen={isModalChange} onRequestClose={handleCloseModalChange} />
        </Container>
    );
}