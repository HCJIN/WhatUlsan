import React, { useState } from 'react'
import './Restaurant.css';


const Restaurant = () => {

  // restaurant-select-head 부분의 글이 바뀔때 거기에 맞는 값이 들어오게 하는 state변수
  const [headSelect, setHeadSelect] = useState('맛집');

  // headSelect의 글을 바꿔줄 onchange 함수
  function headSelectOnchange(e){
    setHeadSelect(e.target.value);
  }

  // select값의 변동에 따라 headName이 바뀌는 함수
  function headName(){
    if(headSelect == '맛집'){
      return(
        <div className='change-head'>
          <span>전체</span>
          <span>한식</span>
          <span>중식</span>
          <span>일식</span>
          <span>양식</span>
          <span>아시안</span>
          <span>기타</span>
        </div>
      )
    }
    else if(headSelect == '카페/디저트'){
      return(
        <div className='change-head'>
          <span>전체</span>
          <span>디저트</span>
          <span>카페</span>
        </div>
      )
    }
    else if(headSelect == '추천관광지'){
      return(
        <div className='change-head'>
          <span>전체</span>
          <span>볼거리</span>
          <span>즐길거리</span>
        </div>
      )
    }
  }

  // select 값의 변동에 따라 filterName이 바뀌는 함수
  function filterName(){
    if(headSelect == '맛집'){
      return(
        <div>
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
          <select>
            <option>할인여부</option>
            <option>할인 O</option>
          </select>
        </div>
      );
    }
    else if(headSelect == '카페/디저트'){
      return(
        <div>
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
          <select>
            <option>할인여부</option>
            <option>할인 O</option>
          </select>
        </div>
      );
    }
    else if(headSelect == '추천관광지'){
      return(
        <select>
          <option>지역</option>
          <option>중구</option>
          <option>남구</option>
          <option>북구</option>
          <option>동구</option>
          <option>울주구</option>
        </select>
      )
    }
  }

  return (
    <div className='restaurant-contain'>
      <div className='restaurant-select-head'>
        <select onChange={headSelectOnchange} value={headSelect}>
          <option value='맛집'>맛집</option>
          <option value='카페/디저트'>카페/디저트</option>
          <option value='추천관광지'>추천관광지</option>
        </select>
        {headName()}
      </div>
      <div className='restaurant-main-content'>
        <div className='restaurant-filter-food'>
          <div>전체</div>
          {filterName()}
        </div>
        <div className='restaurant-sequence'>
          <div>전체 갯수</div>
          <select>
            <option>최근 등록 순</option>
            <option>구매 많은 순</option>
            <option>평점 높은 순</option>
            <option>리뷰 높은 순</option>
          </select>
          <div>
            {/* 부트스트랩에서 그림 4개 표현 하는 거 찾기 */}
            <button type='button' >그림 1줄에 4개씩 보이기</button>
            {/* 부트스트랩에서 그림 1개 표현 하는 거 찾기 */}
            <button type='button' >그림 1줄에 1개씩 보이기</button>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <div>
                <div>이미지</div>
                <div>이미지에 해당하는 기본정보</div>
              </div>
            </li>
          </ul>
          <div>
            {/* 페이징 처리 해야함 */}
            <button type='button' >첫번째 페이지</button>
            <ul>
              <li>1</li>
            </ul>
            <button type='button' >마지막 페이지</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Restaurant