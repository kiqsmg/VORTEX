import styled from 'styled-components';

export const Container = styled.header`

    height: 600px;
    width: 90%;

    justify-content: space-between;
    align-items: center;

    margin: 100px 50px 100px 50px;
    padding: 40px;
    border-radius: 20px;

    font-family: 'Poppins', 'san-serif';


    .about {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .about img {
        margin-left: 50px;
        width: 400px;
    }

    .about div{
        width: 600px;
        margin-left: 20px;
        margin-right: 50px;

        display: flex;
        flex-direction: column;

        justify-content: space-between;

        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    .about div div h2 {
        margin-bottom: 20px;
        font-size: 32px;
    }

    .about div div li{
        margin-top: 20px;
    }

    .about button {
        margin-left: 20px;

        width: 160px;
        border: solid 1px black;
        background: none;
        font-size: 20px;
        font-weight: 600;
        padding: 10px;
        border-radius: 20px;

        color: ${({ theme }) => theme.COLORS.PURPLE};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_grey};
    }

    .about button:hover {
        background-color: ${({ theme }) => theme.COLORS.PURPLE};
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

`;