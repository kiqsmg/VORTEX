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

                <img src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Graph model of a cripto price variation" />
            </div>

            <div className='portfolioAssets'>
                <h3>Your assets</h3>
                <div className='firstColumn'>
                    <p>Name</p>
                    <p>Bitcoin</p>
                    <p>Etherium</p>
                    <p>Litecoin</p>
                    <p>Uniswap</p>
                </div>

                <div className='secondColumn'>
                    <p>Price</p>
                    <p>$15,274.25</p>
                    <p>$404.11</p>
                    <p>$38.36</p>
                    <p>$1.88</p>
                </div>

                <div className='thirdColumn'>
                    <p>Variation</p>
                    <p>+2.09%</p>
                    <p>+4.63%</p>
                    <p>+2.68%</p>
                    <p>-30.22%</p>
                </div>

                <div className='fourthColumn'>
                    <p>Wallet</p>
                    <p>$15,525.04</p>
                    <p>$1,730.81</p>
                    <p>$1,971.30</p>
                    <p>$783.11</p>
                </div>

            </div>
        </Container>
    );
}