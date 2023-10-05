import { Container, Profile, Logout } from './styles';

export function Header() {
    return (
        <Container>
            <Section-01>
                <img src="../../assets/vortex_logo.svg" alt="Vortex logo" />
            </Section-01>

            <Section-02>
                <li><ButtonText title="Graphic" /></li>
                <li><ButtonText title="About" /></li>
                <li><ButtonText title="Bots" /></li>
                <li><ButtonText title="Team" /></li>
                <li><ButtonText title="Contact" /></li>

            </Section-02>

            <Section-03>
                <li><ButtonRound title="Login"></ButtonRound></li>
                <li><ButtonRound title="Criar Conta"></ButtonRound></li>

            </Section-03>
        </Container>
    );
}