import { Bloc, Container, Person } from "./styles";
import jade from "../../assets/rosto1.png";

export function Plays() {
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
                <button type="button" >
                    Selecionar
                </button>
            </div>

        </Container>
    );
}