import { Container } from './styles';

export function Portfolio() {
    return (
        <Container>
            <div className='portfolioGraph'>
                <h2>Create your portfolio</h2>
                <p>Get update with tips, news and tricks</p>
                <div>
                    <h2>$15,525.04</h2>

                    <h3>+1,47%</h3>
                </div>

                <img src="/src/assets/graph_test.svg" alt="Graph model of a cripto price variation" />
            </div>

            <div className='portfolioAssets'>
                <h3>Your assets</h3>

                <table border="1" class="assets">
                    <tr>
                        <th class="firstColumn">Name</th>
                        <th class="secondColumn">Price</th>
                        <th class="thirdColumn">Variation</th>
                        <th class="fourthColumn">In-Wallet</th>
                    </tr>
                    <tr>
                        <td>Bitcoin</td>
                        <td>$15,274.25</td>
                        <td>+2.09%</td>
                        <td>$15,525.04</td>
                    </tr>
                    <tr>
                        <td>Etherium</td>
                        <td>$404.11</td>
                        <td>+4.63%</td>
                        <td>$1,730.81</td>
                    </tr>
                    <tr>
                        <td>Litecoin</td>
                        <td>$38.36</td>
                        <td>+2.68%</td>
                        <td>$1,971.30</td>
                    </tr>
                    <tr>
                        <td>Uniswatd</td>
                        <td>$1.88</td>
                        <td>-30.22%</td>
                        <td>$783.11</td>
                    </tr>
                </table>


            </div>
        </Container>
    );
}