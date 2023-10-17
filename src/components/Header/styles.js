import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;  //mantem header fixo

    height: 60px;
    width: 100%;

    display: flex;
    justify-content: space-between;

    padding: 10px 20px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_header};

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Poppins', 'san-serif';
`;

export const Section01 = styled.header`

    > img {
        height: 60px;
        width: 170px;

        margin-top: -10px;
    }
    

`;

export const Section02 = styled.header`
    display: flex;
    flex-direction: row;   
    justify-content: space-between;
    align-items: center;

    list-style-type: none;

    >li:hover {
        scale: 1.1;
        transition: 0.3s;
    }

    > li:nth-child(2) {
        margin-left: 100px;
    }

    > li:nth-child(3) {
        margin-left: 100px;
    }

    > li:nth-child(4) {
        margin-left: 100px;
    }

    > li:nth-child(5) {
        margin-left: 100px;
    }


`;

export const Section03 = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;

    list-style-type: none;

    > li:hover {
        scale: 1.1;
        transition: 0.3s;
    }

    > li:nth-child(1) {
        padding: 6px 15px;

        background-color: ${({theme})=> theme.COLORS.PURPLE};
        border-radius: 6px;


        color: ${({theme})=> theme.COLORS.WHITE};
        font-weight: 500;
    }

    > li:nth-child(2) {
        margin-left: 20px;
        padding: 6px 15px;

        border: solid 1px;
        border-color: ${({theme})=> theme.COLORS.PURPLE};
        border-radius: 6px;


        color: ${({theme})=> theme.COLORS.PURPLE};
        font-weight: 600;
    }


`;