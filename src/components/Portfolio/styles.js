import styled from 'styled-components';

export const Container = styled.header`

    height: 400px;
    width: 90%;

    display: flex;
    justify-content: space-between;

    padding: 40px 40px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_dark_blue};

    color: black;
    font-family: 'Poppins', 'san-serif';
`;