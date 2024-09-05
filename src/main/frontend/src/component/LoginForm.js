import React from 'react'
import './LoginForm.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const LoginForm = () => {
  
  const navigate = useNavigate()

  function naverLogin(){
    axios
    .get(`/login/naver`)
    .then((res)=>{
      // 네이버 로그인 url로 리다이렉트
      window.location.href = res.data
    })
    .catch((error)=>{
      console.log('네이버 로그인 요청 중 오류', error)
    })
  }

  return (
    <div className='main'>
      <div className='container'>
        <div className='login-box'>
          <h2>왔어울산</h2>
         <div className='inputLogin'>
            이메일 로그인
            <input type='text' name='memId' placeholder='아이디(이메일주소)'/>
            <input type='password' name='memPw' placeholder='비밀번호 입력'/>
         </div>
         <div className='leak'>
          비밀번호 찾기
         </div>
        <div className='div-btn'>
           <button type='button'>로그인</button>
            <p>이메일 회원가입</p>
        </div>
          <p>간편 로그인</p>
          <div className='sns-div'>
            <div>카톡</div>
            <div>페북</div>
            <div onClick={(e)=>{naverLogin()}}>네이버</div>
            <div>구글</div>
            <div>애플</div>
            <div>라인</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm