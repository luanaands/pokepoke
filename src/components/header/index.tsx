import logo from '../../assets/logo.png';
import { Container, Content } from './styles';
export function Header() {
    return (
        <Container>
            <Content>
                <img src={logo} alt="pokepoke" width={50} height={50} />
                <h1>POkePOke</h1>
            </Content>
        </Container>
    );
}