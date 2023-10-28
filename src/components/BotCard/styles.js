import styled from 'styled-components';

export const Container = styled.header`

    height: 400px;
    width: 300px;

    margin: 100px;
    padding: 10px 25px;
    border-radius: 40px;


    font-family: 'Poppins', 'san-serif';

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_dark_blue};

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h3 {
        margin-top: 40px;
        font-size: 28px;
    }

    h4 {
        font-size: 16px;
        font-weight: 500;
    }

    img {
        margin-top: 50px;
        margin-bottom: 10px;
        height: 100px;
    }

    p {
        font-size: 10px;
        font-weight: 500;
        margin-bottom: 10px;
    }
    div div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button {
        margin-top: 10px;
        width: 200px;
        background: none;
        font-size: 20px;
        font-weight: 400;
        padding: 5px 20px;
        border-radius: 10px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_dark_blue};
    }
    
    div div h4 {
        margin-top: 10px;
    }

     button:hover {
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        color: ${({ theme }) => theme.COLORS.BACKGROUND_dark_blue};
    }

`;