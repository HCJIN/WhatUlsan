import React from 'react'

const Restaurant = () => {
  return (
    <div className='restaurant-contain'>
      <div className='restaurant-select-food'>
        맛집 select
      </div>
      <div className='restaurant-main-content'>
        <div className='restaurant-filter-food'>
          <div>전체</div>
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
            <button type='button' >그림 1줄에 4개씩 보이기</button>
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