import { Bloc, Colletion, Container } from "./styles";
import pika from "../../assets/manectric.png";

export function Plays() {
    return (
        <Container>
            <Bloc>
                <div>
                    <h2>Jade</h2>
                    <Colletion>
                        <img src={pika} alt="pokemon" width="100" height="150" />
                        <img src={pika} alt="pokemon" width="100" height="150" />
                        <img src={pika} alt="pokemon" width="100" height="150" />
                    </Colletion>
                </div>
                <div>
                    <h2>Lais</h2>
                    <Colletion>
                        <img src={pika} alt="pokemon" width="100" height="150" />
                        <img src={pika} alt="pokemon" width="100" height="150" />
                        <img src={pika} alt="pokemon" width="100" height="150" />
                    </Colletion>
                </div>
                <div>
                    <h2>Rodrigo</h2>
                    <Colletion>
                        <img src={pika} alt="pokemon" width="100" height="150" />
                        <img src={pika} alt="pokemon" width="100" height="150" />
                        <img src={pika} alt="pokemon" width="100" height="150" />
                    </Colletion>
                </div>
                <div>
                    <h2>Luana</h2>
                    <Colletion>
                        <img src={pika} alt="pokemon" width="100" height="150" />
                        <img src={pika} alt="pokemon" width="100" height="150" />
                        <img src={pika} alt="pokemon" width="100" height="150" />
                    </Colletion>
                </div>
            </Bloc>
            <div>
                <button type="button" >
                    Trocar
                </button>
            </div>

        </Container>
    );
}