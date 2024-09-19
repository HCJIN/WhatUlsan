import React from 'react';
import bg1 from '../img/PC배너.jpg';
import bg2 from '../img/PC배너(역사문화2)+(1).jpg';
import bg3 from '../img/PC배너(반려동물).jpg';
import bg4 from '../img/장생포-pc.jpg';
import bg5 from '../img/태국-pc.jpg';
import '../css/MainPage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MainPage = () => {
  return (
    <div>
      <div className='MainPage-div'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          loop={true}
          className='mySwiper'
          centeredSlides={true} // 현재 슬라이드를 중앙에 배치
          spaceBetween={0} // 슬라이드 간의 공간
          slidesPerView={1} // 현재 슬라이드 1개만 보이게 설정
        >
          <SwiperSlide>
            <img className='MainImg' src={bg1} alt="배너 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='MainImg' src={bg2} alt="배너 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='MainImg' src={bg3} alt="배너 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='MainImg' src={bg4} alt="배너 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='MainImg' src={bg5} alt="배너 5" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>중간 사이드</div>
    </div>
  );
}

export default MainPage;
