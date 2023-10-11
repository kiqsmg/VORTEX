import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
    color: ${({ theme }) => theme.COLORS.WHITE};

    height: 28px;
    border: 0;                         //pode add
    padding: 0 16px;
    //margin-top: 16px;
    border-radius: 6px;
    font-weight: 600;

    &:disabled {
        opacity: 0.5;
    }

`