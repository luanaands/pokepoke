import logo from '../../assets/logo3.png';
import { Container, Content } from './styles';
export function Header() {
    return (
        <Container>
            <Content>
                <img src={logo} alt="pokepoke" />
                <h1>POkePOke</h1>
            </Content>
        </Container>
    );
}