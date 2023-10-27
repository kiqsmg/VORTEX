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

                <table border="1" className='assets'>
                    <td className='firstColumn'>
                        <tr>Name</tr>
                        <tr>Bitcoin</tr>
                        <tr>Etherium</tr>
                        <tr>Litecoin</tr>
                        <tr>Uniswatd</tr>
                    </td>

                    <td className='secondColumn'>
                        <tr>trrice</tr>
                        <tr>$15,274.25</tr>
                        <tr>$404.11</tr>
                        <tr>$38.36</tr>
                        <tr>$1.88</tr>
                    </td>

                    <td className='thirdColumn'>
                        <tr>Variation</tr>
                        <tr>+2.09%</tr>
                        <tr>+4.63%</tr>
                        <tr>+2.68%</tr>
                        <tr>-30.22%</tr>
                    </td>

                    <td className='fourthColumn'>
                        <tr>Wallet</tr>
                        <tr>$15,525.04</tr>
                        <tr>$1,730.81</tr>
                        <tr>$1,971.30</tr>
                        <tr>$783.11</tr>
                    </td>
                </table>

            </div>
        </Container>
    );
}