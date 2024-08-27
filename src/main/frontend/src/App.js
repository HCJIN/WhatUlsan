import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Restaurant from './component/Restaurant';
import LoginForm from './component/LoginForm';
import JoinForm from './component/JoinForm';

function App() {
  return (
    <div className="App">

      <header>
        <div className='container'>
          <div className='header_left'>
            <div className='menu_wrap'>
              <button className='menu_btn'>
                <span>
                  <i className="bi bi-list"></i>
                </span>
              </button>
            </div>
            <div className='logo_wrap'>
              <img src='http://localhost:8080/images/login_logo.png'></img>
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
              <li>로그인</li>
              <li>회원가입</li>
              <li>
                고객센터
              </li>
              <li>찜목록</li>
            </ul>
          </div>
        </div>
      </header>



      <Routes>

        {/* 메인페이지 */}
        <Route path='' element={<div>메인페이지</div>} />

        {/* 맛집페이지  */}
        <Route path='/restaurant' element={<Restaurant />} />

        {/* 로그인페이지 */}
        <Route path='/loginForm' element={<LoginForm />} />

        {/* 회원가입페이지 */}
        <Route path='/joinForm' element={<JoinForm />} />

      </Routes>


    </div>
  );
}

export default App;