import { Container } from './styles';

export function ButtonRound({ title, loading = false, ...rest }) {

    return (
        <Container
            type="button"
            disable={loading}
            {...rest}>
            {loading ? 'Carregando...' : title}
        </Container>
    );
}
