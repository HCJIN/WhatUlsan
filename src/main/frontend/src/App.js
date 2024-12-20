import './App.css';
import './reset.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Restaurant from './component/Restaurant';
import LoginForm from './component/LoginForm';
import JoinForm from './component/JoinForm';
import ServiceCenter from './component/ServiceCenter';
import logo from './img/login_logo.png'
import MainPage from './component/MainPage';
import { useState } from 'react';
import Modal from './component/Modal';
import RegImgPage from './component/RegImgPage';

function App() {

  const navigate = useNavigate();
  //모달 여부
  const [show, setShow] = useState(false);

  //모달 클릭 여부
  function showClick(){
    setShow(true);
  }

  return (
    <div className="App">

      {show ? <Modal show={show} setShow={setShow}/> : <></>}

      <header>
        <div className='container'>
          <div className='header_left'>
            <div className='menu_wrap'>
              <button className='menu_btn'>
                <span>
                  <i className="bi bi-list" onClick={()=>{showClick()}}></i>
                </span>
              </button>
            </div>
            <div className='logo_wrap' onClick={()=>{
              navigate('/')
            }}>
              <img src={logo} className='main-logo'></img>
              <span>왔어울산</span>
            </div>
            <div className='search_wrap'>
              <div className='search_input'>
                <div>
                  <input type='search' placeholder='울산 여행 어디가 좋을까?' maxLength={100}></input>
                  <button type='button'>
                    <i className="bi bi-search-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='header_right'>
            <ul className='info_wrap'>
              <li onClick={(e)=>{navigate(`/loginForm`)}}>로그인</li>
              <li onClick={() => {navigate('joinForm')}}>회원가입</li>
              <li onClick={()=>{
                navigate('/serviceCenter')
              }}>
                고객센터
              </li>
              <li>찜목록</li>
            </ul>
          </div>
        </div>
      </header>



      <Routes>

        {/* 메인페이지 */}
        <Route path='' element={<MainPage />} />

        {/* 맛집페이지  */}
        <Route path='/restaurant' element={<Restaurant />} />

        {/* 로그인페이지 */}
        <Route path='/loginForm' element={<LoginForm />} />

        {/* 회원가입페이지 */}
        <Route path='/joinForm' element={<JoinForm />} />

        {/* 고객센터페이지 */}
        <Route path='/serviceCenter' element={<ServiceCenter/>} />

        {/* 이미지등록 페이지 */}
        <Route path='/regImgPage' element={<RegImgPage />} />
      </Routes>


    </div>
  );
}

export default App;
