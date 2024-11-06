import React, { useEffect, useState } from 'react'
import './Restaurant.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Restaurant = () => {

  const navigate = useNavigate();

  // restaurant-select-head 부분의 글이 바뀔때 거기에 맞는 값이 들어오게 하는 state변수
  const [headSelect, setHeadSelect] = useState('맛집');

  // itemList를 조회해서 저장 할 변수
  const [itemList, setItemList] = useState([]);

  // headSelect의 글을 바꿔줄 onchange 함수
  function headSelectOnchange(e){
    setHeadSelect(e.target.value);
  }

  // select값의 변동에 따라 headName이 바뀌는 함수
  function headName(){
    if(headSelect == '맛집'){
      return(
        <ul className='change-head'>
          <li>전체</li>
          <li>한식</li>
          <li>중식</li>
          <li>일식</li>
          <li>양식</li>
          <li>아시안</li>
          <li>기타</li>
        </ul>
      )
    }
    else if(headSelect == '카페/디저트'){
      return(
        <ul className='change-head'>
          <li>전체</li>
          <li>디저트</li>
          <li>카페</li>
        </ul>
      )
    }
    else if(headSelect == '추천관광지'){
      return(
        <ul className='change-head'>
          <li>전체</li>
          <li>볼거리</li>
          <li>즐길거리</li>
        </ul>
      )
    }
  }

  // select 값의 변동에 따라 filterName이 바뀌는 함수
  function filterName(){
    if(headSelect == '맛집'){
      return(
        <div className='restaurant-under-bar'>
          <select>
            <option>편의시설</option>
            <option>무료주차</option>
            <option>와이파이</option>
            <option>배달</option>
            <option>테이크아웃</option>
          </select>
          <select>
            <option>지역</option>
            <option>중구</option>
            <option>남구</option>
            <option>북구</option>
            <option>동구</option>
            <option>울주군</option>
          </select>
        </div>
      );
    }
    else if(headSelect == '카페/디저트'){
      return(
        <div className='restaurant-under-bar'>
          <select>
            <option>편의시설</option>
            <option>무료주차</option>
            <option>와이파이</option>
            <option>배달</option>
            <option>테이크아웃</option>
          </select>
          <select>
            <option>지역</option>
            <option>중구</option>
            <option>남구</option>
            <option>북구</option>
            <option>동구</option>
            <option>울주구</option>
          </select>
        </div>
      );
    }
    else if(headSelect == '추천관광지'){
      return(
        <div className='restaurant-under-bar'>
          <select>
            <option>지역</option>
            <option>중구</option>
            <option>남구</option>
            <option>북구</option>
            <option>동구</option>
            <option>울주구</option>
          </select>
        </div>
      )
    }
  }

  useEffect(() => {
    axios.get('/item/getItemAll')
    .then((res) => {
      setItemList(res.data)
    })
    .catch((error) => {console.log(error)})
  },[])

  console.log(itemList)

  // 지역 편의시설 할인여부처럼 기본 값 일때는 전체를 조회하도록 만들어야한다.

  return (
    <div className='restaurant-contain'>
      <div className='restaurant-select-head'>
        <select className='restaurant-head-bar' onChange={headSelectOnchange} value={headSelect}>
          <option value='맛집'>맛집</option>
          <option value='카페/디저트'>카페/디저트</option>
          <option value='추천관광지'>추천관광지</option>
        </select>
        {headName()}
      </div>
      <div className='restaurant-main-content'>
        <div className='restaurant-filter-food'>
          <div className='restaurant-filter-food-head'>전체</div>
          {filterName()}
        </div>
        <div className='restaurant-sequence'>
          <div className='restaurant-sequence-all'>
            전체 갯수
          </div>
          <div className='restaurant-sequence-right'>
            <select>
              <option>최근 등록 순</option>
              <option>구매 많은 순</option>
              <option>평점 높은 순</option>
              <option>리뷰 높은 순</option>
            </select>
            <div>
              {/* 부트스트랩에서 그림 4개 표현 하는 거 찾기 */}
              <button style={{border:'none', marginLeft:'40px'}} type='button' className='button-icon' >
                <span style={{paddingRight:'20px'}}><i class="bi bi-grid-fill"></i></span>
                <span><i class="bi bi-grid-1x2-fill"></i></span>
              </button>
            </div>
          </div>
        </div>
        {/* 이미지를 담당하는 div */}
        <div className='food-box'>
          <ul id='foodList'>
            <li className='food_list'>
              {
                itemList.map((item, i) => {
                  return(
                    <div key={i} className='food-div'>
                      <div className='food'>
                        <img src={item.imgList && item.imgList.length > 0 ? `http://localhost:8080/imgs/upload/${item.imgList[0].attachedFileName}` : 'default_image_url'} alt={item.itemName}/>
                      </div>
                      <div className='basic'>기본정보</div>
                      <div>{item.itemName}</div>
                    </div>
                  )
                })
              }
            </li>
          </ul>
          <div className='restaurant-under-page'>
            {/* 페이징 처리 해야함 */}
            <button type='button' className='button-icon'>
              <i class="bi bi-chevron-double-left"></i>
            </button>
            <button typeof='button' className='button-icon'>
              <i class="bi bi-chevron-left"></i>
            </button>
            <ul>
              <li>여기에 이미에 따라서 페이징처리</li>
            </ul>
            <button type='button' className="button-icon">
              <i class="bi bi-chevron-right"></i>
            </button>
            <button type='button' className='button-icon'>
              <i class="bi bi-chevron-double-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Restaurant