import React, { useEffect, useState } from 'react'
import './Restaurant.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Restaurant = () => {

  const navigate = useNavigate();

  // restaurant-select-head 부분의 글이 바뀔때 거기에 맞는 값이 들어오게 하는 state변수
  const [headSelect, setHeadSelect] = useState('맛집');

  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  // 카테고리 데이터 로드
  useEffect(() => {
    axios.get('item/getCategoryList') // 카테고리 조회 API 엔드포인트
      .then((res) => {
        setCategories(res.data);
        filterCategories(res.data, headSelect); // 기본 카테고리 필터링
      })
      .catch((error) => console.error(error));
  }, []);

  // headSelect 변경 시 필터링
  useEffect(() => {
    filterCategories(categories, headSelect);
  }, [headSelect]);

  // 카테고리 필터링 함수
  const filterCategories = (categories, selectedHead) => {
    console.log(categories)
    const filtered = categories.filter(cat => cat.cateName === selectedHead);
    setFilteredCategories(filtered);
  };
  console.log(filteredCategories)

  // console.log(filteredCategories)

  // useEffect(() => {
  //   let endpoint = '';
    
  //   // headSelect 값에 따른 API 엔드포인트 설정
  //   switch (headSelect) {
  //     case '맛집':
  //       endpoint = '/item/getRestaurantItems';
  //       break;
  //     case '카페/디저트':
  //       endpoint = '/item/getCafeItems';
  //       break;
  //     case '추천관광지':
  //       endpoint = '/item/getTouristItems';
  //       break;
  //     default:
  //       endpoint = '/item/getItemAll'; // 기본적으로 모든 아이템 조회
  //   }
  
  //   axios.get(endpoint)
  //     .then((res) => {
  //       setItemList(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [headSelect]);  // headSelect 변경 시마다 실행
  

  // 지역 편의시설 할인여부처럼 기본 값 일때는 전체를 조회하도록 만들어야한다.

  return (
    <div className='restaurant-contain'>
      <div className='restaurant-select-head'>
        <select onChange={(e) => setHeadSelect(e.target.value)} value={headSelect}>
          <option value="맛집">맛집</option>
          <option value="카페/디저트">카페/디저트</option>
          <option value="추천관광지">추천관광지</option>
        </select>
        <ul>
          {filteredCategories.map(cat => (
            <li key={cat.cateCode}>{cat.cateDetail}</li>
          ))}
        </ul>
      </div>
      <div className='restaurant-main-content'>
        <div className='restaurant-filter-food'>
          <div className='restaurant-filter-food-head'>전체</div>
          
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
        <div>
          <ul>
            <li>
              
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