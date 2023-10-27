//Styling Imports
import { Container } from './styles';

//Components Imports
import { Header } from '../../components/Header';
import { Portfolio } from '../../components/Portfolio';
import { About } from '../../components/About';

//Strategic Imports


//Image Imports



// import Swiper core and required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Swiper Import
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper style Import
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';




export function Home() {
    return (
        <Container>

            <Header />

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <h3><strong>Software</strong> automatizado <br /> para <strong>compra</strong> e <strong>venda</strong> <br />de <strong>criptomoedas</strong>.</h3>
                    <img src="https://images.unsplash.com/photo-1697179426897-75090343fe83?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <h3>Your own personal cripto <strong>wallet</strong>...</h3>
                    <img src="https://images.unsplash.com/photo-1697179426932-f9b744ca0c1d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <h3>Rinoceironte Branco</h3>
                    <img src="https://images.unsplash.com/photo-1696894134345-abdb955875b2?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1882" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <h3>Cavalos da neve</h3>
                    <img src="https://images.unsplash.com/photo-1696519051778-ac29548bbcf4?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070" alt="" />
                </SwiperSlide>
            </Swiper>

            <Portfolio />

            <About />


        </Container>
    );
}