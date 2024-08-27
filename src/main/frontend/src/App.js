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
                  메뉴열기
                </span>
              </button>
            </div>
            <div className='logo_wrap'>

            </div>
          </div>
          <div className='header_right'></div>
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
