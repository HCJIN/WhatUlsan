import React from 'react'
import './LoginForm.css'
import { useNavigate } from 'react-router-dom'
const LoginForm = () => {
  
  const navigate = useNavigate()

  return (
    <div className='main'>
      <div className='container'>
        <div>
          왔어울산
         <div className='inputLogin'>
            이메일 로그인
            <input type='text' name='memId' placeholder='아이디(이메일주소)'/>
            <input type='password' name='memPw' placeholder='비밀번호 입력'/>
         </div>
         <div>
          비밀번호 찾기
         </div>
         <button type='button'>로그인</button>
          이메일 회원가입
          간편 로그인
          <div className='sns-div'>
            <div onClick={(e)=>{navigate(``)}}>카톡</div>
            <div>페북</div>
            <div>네이버</div>
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