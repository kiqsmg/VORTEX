import styled from 'styled-components';
//import { Link } from 'react-router-dom';


export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_lighter};
    color:black;

    .swiper {
        width: 100%;
    }

    .swiper-slide img {
        display: block;
        width: 100vw;
        height: 300px;
        object-fit: cover;
        
    }

    .swiper h3 {
        position: absolute;
        margin-top: 50px;
        margin-left: 100px;
    }

    .swiper p {
        position: absolute;
        margin-top: 70px;
        margin-left: 100px;
    }


`;