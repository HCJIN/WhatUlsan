import React from 'react';
import bg1 from '../img/PC배너.jpg';
import bg2 from '../img/PC배너(역사문화2)+(1).jpg';
import bg3 from '../img/PC배너(반려동물).jpg';
import bg4 from '../img/장생포-pc.jpg';
import bg5 from '../img/태국-pc.jpg';
import stIcon1 from '../img/Cafe_ko.png';
import stIcon2 from '../img/Restaurant_ko.png';
import stIcon3 from '../img/TourBus_ko.png';
import stIcon4 from '../img/TouristAttraction_ko.png';
import stIcon5 from '../img/Accommodation_ko.png';
import stIcon6 from '../img/TourTaxi_ko.png';
import midBg from '../img/pc_롤링띠배너_한국어_1.jpg'
import midBg2 from '../img/pc_여행성향테스트+완료시+500포인트+지급_+한국.jpeg'
import midBg3 from '../img/pc_banner07_roll_kr.jpg'
import menuImg1 from '../img/580541_njsULDmCHv0mVTorwBqC7shvBAGw53OD.jpg';
import '../css/MainPage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {

  const navigate = useNavigate();

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
      {/* swiper-end */}

      <div className='middle-section'>
        <div className='section-container'>
          <div className='quick-menu'>
            <img src={stIcon1}></img>
          </div>
          <div className='quick-menu'>
            <img src={stIcon2} onClick={() => {navigate('/restaurant')}}></img>
          </div>
          <div className='quick-menu'>
            <img src={stIcon3}></img>
          </div>
          <div className='quick-menu'>
            <img src={stIcon4}></img>
          </div>
          <div className='quick-menu'>
            <img src={stIcon5}></img>
          </div>
          <div className='quick-menu'>
            <img src={stIcon6}></img>
          </div>
        </div>
      </div>
      {/* middle-section-end */}

      <div className='midPage-div'>
        <Swiper
            modules={[Pagination, Autoplay]} // Navigation 모듈 제거
            pagination={{ clickable: true }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
            loop={true}
            className='midSwiper'
            centeredSlides={true}
            spaceBetween={0}
            slidesPerView={1}
        >
            <SwiperSlide>
                <img className='MidImg' src={midBg} alt="배너 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='MidImg' src={midBg2} alt="배너 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='MidImg' src={midBg3} alt="배너 3" />
            </SwiperSlide>
        </Swiper>
      </div>
      {/* midBG-end */}

      <div className='goodChoice-div'>
        <h1>추천 핫플</h1>
        <div className='menu-div'>
          <div className='menuContent'>
            <img src={menuImg1}></img>
            <h4>마마꾸</h4>
            <p className='price'>16,000 ~</p>
            <div>
              <div>
                <p className='star'>★ 5</p>
                <span>(리뷰 6)</span>
              </div>
              <div>
                <p>♥</p>
              </div>
            </div>
          </div>
          <div className='menuContent'>
            <img src={menuImg1}></img>
            <h4>마마꾸</h4>
            <p className='price'>16,000 ~</p>
            <div>
              <div>
                <p className='star'>★ 5</p>
                <span>(리뷰 6)</span>
              </div>
              <div>
                <p>♥</p>
              </div>
            </div>
          </div>
          <div className='menuContent'>
            <img src={menuImg1}></img>
            <h4>마마꾸</h4>
            <p className='price'>16,000 ~</p>
            <div>
              <div>
                <p className='star'>★ 5</p>
                <span>(리뷰 6)</span>
              </div>
              <div>
                <p>♥</p>
              </div>
            </div>
          </div>
          <div className='menuContent'>
            <img src={menuImg1}></img>
            <h4>마마꾸</h4>
            <p className='price'>16,000 ~</p>
            <div>
              <div>
                <p className='star'>★ 5</p>
                <span>(리뷰 6)</span>
              </div>
              <div>
                <p>♥</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
