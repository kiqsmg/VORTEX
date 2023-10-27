import { Container } from './styles';

export function About() {
    return (
        <Container>
            <div className='about'>
                <img src="/src/assets/phone.svg" alt="" />

                <div>
                    <div>
                        <h2>vortex</h2>

                        <p>Vortex Project é um software desenvolvido em Python para ser capaz de fazer operações de compra e venda de criptomoedas.
                            Alem disso, ele tem autonomia de decisão nas transações pois é capaz de jugar o melhor momento de faze-las.<br /><br />
                            Para montar a lógica do robô e torna-lo realmente eficiente, levamos em consideração os conceitos apresentados em:
                        </p>

                        <li>The Axioms of Zurich - Max Gunther</li>
                        <li>Technical Analysis of the Financial Markets: A Comprehensive Guide to Trading Methods and Applications - John J. Murphy</li>
                    </div>

                    <button>More about us</button>
                </div>
            </div>
        </Container>
    );
}