import { Bloc, Container, Person } from "./styles";
import jade from "../../assets/rosto1.png";
import { useEffect, useState } from "react";
import { ModalChange } from "../modalChange";
import { api } from "../../services/api";
import { PokemonsProvider } from "../../hooks/usePokemons";

interface Uses {
    id: number;
    name: string;
}

export function Plays() {
    const [isModalChange, setIsModalChange] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState<Uses[]>([]);
    const [users, setUsers] = useState<Uses[]>([]);

    useEffect(() => {
        api("/users")
            .then(response => response)
            .then(data => setUsers(data.data));
    }, [])

    function handleModalChange() {
        setIsModalChange(true);
    }

    function handleCloseModalChange() {
        setIsModalChange(false);
    }

    function handleSetSelectedName(user: Uses) {
        console.log(selectedPerson);
        if (selectedPerson.includes(user)) {
            setSelectedPerson(selectedPerson.filter(person => person !== user));
        } else {
            const qtd = selectedPerson.length;
            if (qtd < 2) {
                setSelectedPerson([...selectedPerson, user]);
            }
        }
    }

    return (
        <Container>
            <Bloc>
                {
                    users.map(user => (
                        <div key={user.id}>
                            <Person style={{ background: selectedPerson.includes(user) ? "#3466af" : "#1d2c5e" }} onClick={() => handleSetSelectedName(user)}>
                                <h2>{user.name}</h2>
                                <img src={jade} alt={user.name} />
                            </Person>
                        </div>
                    ))
                }
            </Bloc>
            <div>
                <button disabled={selectedPerson.length !== 2 ? true : false} type="button" onClick={handleModalChange} >
                    Selecionar
                </button>
            </div>
            <PokemonsProvider>
                <ModalChange users={selectedPerson} isOpen={isModalChange} onRequestClose={handleCloseModalChange} />
            </PokemonsProvider>
        </Container>
    );
}