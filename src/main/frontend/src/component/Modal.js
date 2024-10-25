import React from 'react'
import stIcon3 from '../img/TourBus_ko.png';
import stIcon5 from '../img/Accommodation_ko.png';
import stIcon6 from '../img/TourTaxi_ko.png';
import stIcon1 from '../img/cafe.png';
import stIcon2 from '../img/food.png';
import stIcon4 from '../img/tour.png';
import '../css/Modal.css';

const Modal = ({show, setShow}) => {
  return (
    <div className='modalConteiner'>
      <div className='menu-div'>
        <div>
          <i className="bi bi-door-closed" onClick={()=>{
            setShow(false);
          }}></i>
        </div>
        <div className='menu-div-top'>
          <div className='restaurant'>
            <div className='icon-div'>
              <img src={stIcon2}></img>
              <p>맛집</p>
            </div>
            <ul className='restaurant-ul'>
              <li>전체</li>
              <li>한식</li>
              <li>중식</li>
              <li>일식</li>
              <li>양식</li>
              <li>아시안</li>
              <li>기타</li>
            </ul>
          </div>
          <div className='cafe-div'>
            <div className='icon-div'>
              <img src={stIcon1}></img>
              <p>카페/디저트</p>
            </div>
            <ul className='cafe-ul'>
              <li>전체</li>
              <li>디저트</li>
              <li>카페</li>
            </ul>
          </div>
          <div className='tourist-div'>
            <div className='icon-div'>
              <img src={stIcon4}></img>
              <p>추천관광지</p>
            </div>
            <ul className='tourist-ul'>
              <li>전체</li>
              <li>볼거리</li>
              <li>즐길거리</li>
            </ul>
          </div>
        </div>
        <div className='menu-div-bottom'>
          <div className='icon-div-all'>
            <div className='icon-div'>
              <img src={stIcon3}></img>
            </div>
            <div className='icon-div'>
              <img src={stIcon5}></img>
            </div>
            <div className='icon-div'>
              <img src={stIcon6}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal