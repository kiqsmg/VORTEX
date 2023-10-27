import styled from 'styled-components';

export const Container = styled.header`

    height: 400px;
    width: 90%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 100px 50px 100px 50px;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0.3em 0.3em 1em black;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_assets};
    font-family: 'Poppins', 'san-serif';


    .portfolioGraph div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        padding-top: 20px;
    }

    .portfolioGraph h2{
        font-weight: 500;
        font-size: 32px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    .portfolioGraph h3{
        border-radius: 5px;
        padding: 2px 12px 2px 12px;
        background-color: green;

        font-weight: 500;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    .portfolioGraph p{
        padding-top: 5px;
        font-size: 14px;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    .portfolioGraph img{
        margin-top: 50px;
        width: 330px;
        height: 142px;
    }


    //--------------Assets Section------------

    .portfolioAssets {
        display: flex;
        flex-direction: column;
        width: 800px;
        height: 300px;

        border-radius: 10px;
        border: solid 2px ${({ theme }) => theme.COLORS.LINE_COLOR};


        padding: 20px 50px 20px 50px;

        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    .portfolioAssets h3 {
        margin: 10px 0px 10px 0px;
    }

    .portfolioAssets .assets{
        width: 100%;
        height: 100%;
        border: none;
        
        justify-content: space-between;

    }

    table.assets th.firstColumn, th.secondColumn, th.thirdColumn, th.fourthColumn {
        text-align: left;
    }

    table.assets {
        border-collapse: collapse; /* Remove as bordas exteriores */
        width: 100%;
    }
    
    table.assets th:nth-child(1), table.assets th:nth-child(2), table.assets th:nth-child(3), table.assets th:nth-child(4){
        border: none;
    }

    table.assets th, table.assets td {
        border: 1px solid ${({ theme }) => theme.COLORS.LINE_COLOR}; /* Adiciona uma borda fina nas células internas */
        padding: 8px;
        border-left: none;
        border-right: none;
    }

    table.assets td:nth-child(3) {
        color: greenyellow;
    }

    table.assets tr:nth-child(5) td:nth-child(3){
        color: red;
    }

`;