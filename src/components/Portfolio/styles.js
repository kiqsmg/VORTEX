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

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_dark_blue};
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
        border: solid 2px white;


        padding: 20px 50px 20px 50px;

        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    .portfolioAssets .assets{
        display: flex;
        width: 100%;
        height: 100%;

        
        justify-content: space-between;

    }

    table, tr, td {
        border: 1px solid white;
        border-collapse: collapse;
    }

`;