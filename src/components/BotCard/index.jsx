import { Container } from './styles';

export function BotCard() {
    return (
        <Container>
            <div className='bot'>
                <h3>Zeus-Bot</h3>
                <h4>Specific details about this bot*</h4>

                <img src="/src/assets/graph_test.svg" alt="" />

                <p>Relatório gerado por meio de simulação</p>


                <div>
                    <button>Assinar</button>
                    <h4>Mais detalhes</h4>
                </div>
            </div>
        </Container>
    );
}