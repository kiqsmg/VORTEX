
import { Container, Section01, Section02, Section03 } from './styles';

export function Header() {
    return (
        <Container>
            <Section01>
                <img src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80" alt="Vortex logo" />
            </Section01>

            <Section02>
                <li>Graphic</li>
                <li>About</li>
                <li>Bots</li>
                <li>Team</li>
                <li>Contact</li>

            </Section02>

            <Section03>
                <li>LogIn</li>
                <li>Criar Conta</li>
            </Section03>

        </Container>
    );
}