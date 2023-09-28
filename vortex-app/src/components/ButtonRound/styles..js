import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_grey};
    color: ${({ theme }) => theme.COLORS.PURPLE};

    height: 20px;
    border: 0;                         //pode add
    padding: 0 16px;
    //margin-top: 16px;
    border-radius: 36px;
    font-weight: 800;

    &:disabled {
        opacity: 0.5;
    }

`