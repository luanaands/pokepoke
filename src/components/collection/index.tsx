import { Card } from "../card";
import { Container } from "./styles";

export function Collection() {

    return (
        <Container>
            <h3>Luana</h3>
            <div className="card">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </Container>
    )
}