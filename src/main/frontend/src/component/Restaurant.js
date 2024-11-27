import React, { useEffect, useState } from 'react'
import './Restaurant.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Restaurant = () => {

  const navigate = useNavigate();

  // 카테고리에 해당하는 아이템들을 저장할 state 변수
  const [restaurantItems, setRestaurantItems] = useState([]);

  // restaurant-select-head 부분의 글이 바뀔때 거기에 맞는 값이 들어오게 하는 state변수
  const [headSelect, setHeadSelect] = useState('맛집');

  // 카테고리 리스트 저장하는 state변수
  const [categories, setCategories] = useState([]);

  // headSelect에서 필터링 된 cateDetail이 들어가는 함수
  const [filteredCategories, setFilteredCategories] = useState([]);

  // 카테고리 데이터 로드
  useEffect(() => {
    axios.get('/item/getCategoryList')
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

  const handleCategoryDetailClick = (cateDetail) => {
    const params = {
      cateName : headSelect,
      cateDetail : cateDetail === '전체' ? '' : cateDetail
    };

    console.log(params)

    axios.get('/item/getCategoryItems', {params})
    .then((res) => {
      setRestaurantItems(res.data);
    })
    .catch(error => console.log(error));
  };

  return (
    <div className='restaurant-contain'>
      <div className='restaurant-select-head'>
        <select className='restaurant-head-bar' onChange={(e) => setHeadSelect(e.target.value)} value={headSelect}>
          <option value="맛집">맛집</option>
          <option value="카페/디저트">카페/디저트</option>
          <option value="추천관광지">추천관광지</option>
        </select>
        <ul className='change-head'>
          <li onClick={() => handleCategoryDetailClick('전체')}>전체</li>
          {filteredCategories.map(cat => (
            <li key={cat.cateCode} onClick={() => handleCategoryDetailClick(cat.cateDetail)}>{cat.cateDetail}</li>
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