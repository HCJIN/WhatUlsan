import axios from 'axios';
import React, { useEffect, useState } from 'react'

const RegImgPage = () => {

  // 카테고리 list를 저장할 변수
  const [categoryList, setCategoryList] = useState([]);

  // 편의시설 list를 저장할 변수
  const [amenitiesList, setAmenities] = useState([]);

  // 상품 등록을 위한 모든 데이터를 저장할 변수
  const [itemData, setItemData] = useState({
    itemName : '',
    itemIntro : '',
    itemArea : '중구',
    cateCode : 1
  });

  const [checkedAmenities, setCheckedAmenities] = useState([]);
  console.log(checkedAmenities)
  // 이미지 첨부파일을 저장할 state 변수
  const [mainImg, setMainImg] = useState(null);
  const [subImg, setSubImg] = useState(null);

  // 카테고리 list를 불러오는 함수
  useEffect(() => {
    axios.get('/item/getCategoryList')
    .then((res) => {
      setCategoryList(res.data)
    })
    .catch((error) => {console.log(error)})
  }, [])

  // 편의시설 list를 불러오는 함수
  useEffect(() => {
    axios.get('/item/getAmenitiesList')
    .then((res) => {
      setAmenities(res.data)
    })
    .catch((error) => {console.log(error)})
  }, [])

  // 상품등록을 위한 react에서 데이터 받아오는 onchange 함수
  const onchangeItemData = (e) => {
    setItemData({
      ...itemData,
      [e.target.name] : e.target.value
    })
  }

  // 체크박스 변경 핸들러 함수
  const handleCheckboxChange = (e, amenitiesCode) => {
    if (e.target.checked) {
      // 체크되었을 때 배열에 추가
      setCheckedAmenities([...checkedAmenities, amenitiesCode]);
    } else {
      // 체크 해제 시 배열에서 제거
      setCheckedAmenities(checkedAmenities.filter((code) => code !== amenitiesCode));
    }
  };

  // 상품등록 버튼 클릭
  const insertItem = () => {
    // 첨부파일이 있을 때 설정해야 하는 코드
    const fileConfig = {headers : { 'Content-Type' : 'multipart/form-data'}};

    // form 객체 생성
    const itemForm = new FormData();

    // form 객체에 데이터 추가
    itemForm.append('itemName', itemData.itemName || '');  // 기본값 설정
    itemForm.append('itemIntro', itemData.itemIntro || '');  // 기본값 설정
    itemForm.append('itemArea', itemData.itemArea || '중구');  // 기본값 설정
    itemForm.append('cateCode', itemData.cateCode || 1);  // 기본값 설정
    itemForm.append('mainImg', mainImg);
    itemForm.append('subImg', subImg);

    // 체크된 편의시설 코드들을 formData로 추가
    checkedAmenities.forEach(code => itemForm.append('amenitiesCodes', code));

    axios.post('/item/insertItem', itemForm, fileConfig)
    .then((res) => {
      alert('등록이 완료되었습니다.')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  console.log(itemData)

  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr><td>카테고리</td></tr>
            <tr>
              <td>
                <select name='cateCode' onChange={(e) => {onchangeItemData(e)}}>
                  {
                    categoryList.map((category, i) => {
                      return(
                        <option key={i} value={category.cateCode}>{category.cateDetail}</option>
                      )
                    })
                  }
                </select>
              </td>
            </tr>
            <tr><td>등록지 명</td></tr>
            <tr>
              <td>
                <input type='text' name='itemName'  onChange={(e) => {onchangeItemData(e)}}/>
              </td>
            </tr>
            <tr><td>등록지 소개</td></tr>
            <tr>
              <td>
                <input type='text' name='itemIntro'  onChange={(e) => {onchangeItemData(e)}}/>
              </td>
            </tr>
            <tr><td>편의시설</td></tr>
            <tr>
              <td>
                {
                  amenitiesList.map((amenities, i) => {
                    return(
                      <div key={i}>
                        <input
                          type="checkbox"
                          value={amenities.amenitiesCode}
                          onChange={(e) => handleCheckboxChange(e, amenities.amenitiesCode)}
                        />
                        <span>{amenities.amenitiesName}</span>
                      </div>
                    )
                  })
                }
              </td>
            </tr>
            <tr><td>지역</td></tr>
            <tr>
              <td>
                <select name='itemArea'  onChange={(e) => {onchangeItemData(e)}}>
                  <option>중구</option>
                  <option>남구</option>
                  <option>북구</option>
                  <option>동구</option>
                  <option>울주군</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <p>메인 이미지</p>
          <input type='file' onChange={(e) => setMainImg(e.target.files[0])} />
        </div>
        <div>
          <p>상세 이미지</p>
          <input type='file' onChange={(e) => setSubImg(e.target.files[0])} />
        </div>
        <div>
          <button type='button' onClick={() => {insertItem()}} >
            제품등록
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegImgPage