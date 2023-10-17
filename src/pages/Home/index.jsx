import { Container } from './styles';

import { Header } from '../../components/Header';
import { Swiper } from '../../components/Carousel';



// Swiper Import
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper style Import
import "swiper/css";
import "swiper/css/navigation";

// Swiper Required Module
import { Navigation } from "swiper";



export function Home() {
    return (
        <Container>
            <Header />
            <Swiper
                grabCursor={true}
                loop={true}
                loopFillGroupWithBlank={true}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.20": {
                        slidesPerView: 4,
                        spaceBetween: 160,
                    },
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
            </Swiper>
        </Container>
    );
}