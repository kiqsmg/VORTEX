import { Container } from './styles';

export function ButtonText({ title, loading = false, ...rest }) {

    return (
        <Container
            type="button"
            disable={loading}
            {...rest}>
            {loading ? 'Carregando...' : title}
        </Container>
    );
}
