import React, { useState } from 'react'
import './LoginForm.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginForm = () => {
  
  const navigate = useNavigate()

  
  const[loginData, setLoginData] = useState(
    {
      loginId:''
      , loginPw:''
    }
  )

const CLIENT_ID = 'ZlbRdQHVy1guysjCbXWu';
const REDIRECT_URI = 'http://localhost:8080/auth/naver/login/callback';
const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

function tryNaver() {
  window.location.href = NAVER_AUTH_URL;
}


  function tryLogin(){
    axios
    .post(`/login/nomal`, loginData)
    .then((res)=>{
      alert(`로그인 성공`)
    })
    .catch((error)=>{
      console.log('일반 로그인 에러', error)
    })
  }

  function changeData(e){
    setLoginData({
      ...loginData,
      [e.target.name]:e.target.value
    })
  }

  return (
    <div className='main'>
      <div className='container'>
        <div className='login-box'>
          <h2>왔어울산</h2>
         <div className='inputLogin'>
            <p>이메일 로그인</p>
            <input type='text' name='loginId' placeholder='아이디(이메일주소)' onChange={(e)=>{changeData(e)}}/>
            <input type='password' name='loginPw' placeholder='비밀번호 입력'onChange={(e)=>{changeData(e)}}/>
         </div>
         <div className='leak'>
          비밀번호 찾기
         </div>
        <div className='div-btn'>
           <button type='button' onClick={(e)=>{tryLogin()}}>로그인</button>
            <p>이메일 회원가입</p>
        </div>
          <p>간편 로그인</p>
          <div className='sns-div'>
            <div>카톡</div>
            <div>페북</div>
            <div onClick={(e)=>{tryNaver()}}>네이버</div>
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