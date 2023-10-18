import styled from 'styled-components';
//import { Link } from 'react-router-dom';


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_main};
    color:black;

    .swiper {
        width: 100vw;
    }

    .swiper-slide img {
        display: block;
        width: 100vw;
        height: 400px;
        object-fit: cover;
    }


`;