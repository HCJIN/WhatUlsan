import React, { useState } from 'react'
import './JoinForm.css'
import Select, { SingleValue, ActionMeta } from 'react-select';
import JoinFormArea from './JoinFormArea';
const JoinForm = () => {

// 버튼 바뀔때마다 색상밖끼게
//내국인 / 외국인
const [btnActive, setBtnActive] = useState('citizen');
// 남자 / 여자
const [btnActive1, setBtnActive1] = useState('male');

// 버튼 클릭시
// 내 / 외국인
const changeBtn = (e) => {
  setBtnActive(e.target.value)
}
// 남자 / 여자
const changeBtn1 = (e) => {
  setBtnActive1(e.target.value)

}

const CONTRY_CODE = [
  { value: '82', label: '+82' },
  { value: '61', label: '+61' },
  { value: '81', label: '+81' },
  { value: '84', label: '+84' },
  { value: '852', label: '+852' },
  { value: '65', label: '+65' },
  { value: '34', label: '+34' },
  { value: '90', label: '+90' },
  { value: '1', label: '+1' },
  { value: '44', label: '+44' },
];

  return (
    <div className='join-main'>
      <div>
        <h4>회원가입</h4>
      </div>
      {/* 이것저것 모두다 */}
      <div>
        {/* 이메일 */}
        <div className='emailAddr'>
          <div>
            아이디(이메일주소)
          </div>
          <div className='emailAddr-div'>
            <input type='text' />
            <button>인증번호 발송</button>
          </div>
        </div>
        {/* 국적 */}
        <div>
          <div className='nationality'>
              <button className={'join-btn ' + (btnActive == 'citizen' ? "join-btn-action" : "" )}
                      type='button'
                      name='nationality'
                      value='citizen'
                      
                      onClick={(e) => {changeBtn(e)}}>
                        내국인
              </button>
              <button className={'join-btn ' + (btnActive == 'foreigner' ? "join-btn-action" : "" )}
                      type='button'
                      name='nationality'
                      value='foreigner'
                      onClick={(e) => {changeBtn(e)}}>
                외국인
              </button>
          </div>

          <div className='city-div'>
              <JoinFormArea/>
          </div>
          {/* 휴대폰 번호 */}
          <div className='phoneNumber'>
            <div>
              휴대폰 번호
            </div>
            <div className='phone-div'>
            <Select className='phone'
        defaultValue={CONTRY_CODE[0]}
        isClearable={false}
        isSearchable={false}
        menuPortalTarget={document.body}
        options={CONTRY_CODE}
        // styles={customStyles}
        // onChange={handleOptionChange}
      />
            <input class="vti__input" 
                   placeholder="‘-’ 빼고 숫자만 입력" 
                   />
            </div>
          </div>
          {/* 비밀번호 */}
          <div>
            <div>비밀번호</div>
            <div>
              <input className='password' 
                    type='password' 
                    placeholder='비밀번호 입력'/>
            </div>
            <div>
              <input className='password'
                    type='password' 
                    placeholder='비밀번호 입력확인'/>
            </div>
            <div className='pass'>
              비밀번호는 영문+숫자+특수문자 조합으로 9자~16자로 사용할 수 있습니다.
            </div>
          </div>
          {/* 이름 */}
          <div>
            <div>이름</div>
            <div>
              <input className='name'
                     type='text' 
                     placeholder='성 (Last name)'/>
            </div>
            <div>
              <input className='name' 
                     type='text' 
                     placeholder='이름 (First name)'/>
            </div>
          </div>
          {/* 성별 */}
          <div>
            <div>성별</div>
            <div className='gender'>
              <button className={'join-btn ' + (btnActive1 == 'male' ?
                 "join-btn-action" : ""
              ) }
                      type='button'
                      name='gender'
                      value='male'
                      onClick={(e) => {changeBtn1(e)}}>
                남성
              </button>
              <button className={'join-btn ' + (btnActive1 == 'female' ?
                 "join-btn-action" : ""
              )}
                      type='button'
                      name='gender'
                      value='female'
                      onClick={(e) => {changeBtn1(e)}}
                      >
                여성
              </button>
            </div>
          </div>
          {/* 생년월일 */}
          <div>

          </div>
          {/* 약관동의 */}
          <div>
            <div>
              <input type='checkbox'/> 전체 동의
            </div>
            <div>
              <ul>
                <li>
                  <div><input type='checkbox'/><span>[필수]</span> 만 14세 이상 이용확인</div>
                </li>
              </ul>
            </div>
          </div>
          {/* 시작버튼 */}
          <div>
            <button className='join-btn joinBtn'
                    type='button'>
                      왔어울산 시작하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinForm