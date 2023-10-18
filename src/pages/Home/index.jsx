//Styling Imports
import { Container } from './styles';

//Components Imports
import { Header } from '../../components/Header';
import { Portfolio } from '../../components/Portfolio';

//Strategic Imports


//Image Imports



// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

// Swiper Import
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper style Import
import "swiper/css";
import 'swiper/css/pagination';





export function Home() {
    return (
        <Container>

            <Header />

            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1697179426897-75090343fe83?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1697179426932-f9b744ca0c1d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1696894134345-abdb955875b2?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1882" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1696894134302-7e124a8bf2e8?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1672106882160-7bb288a25c90?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2072" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1696519051778-ac29548bbcf4?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070" alt="" />
                </SwiperSlide>
            </Swiper>




        </Container>
    );
}