import React from 'react'
import './JoinForm.css'

const JoinForm = () => {
  return (
    <div className='join-main'>
      <div>
        <h4>회원가입</h4>
      </div>
      {/* 이것저것 모두다 */}
      <div>
        {/* 이메일 */}
        <div>
          <div>
            아이디(이메일주소)
            </div>
          <div>
            <input type='text' />
            <button>인증번호 발송</button>
          </div>
        </div>
        {/* 국적 */}
        <div>
          <div>
            <div>
              <button>내국인</button>
            </div>
            <div>
              <button>외국인</button>
            </div>
          </div>

          <div>
            <div>
              <select>
                <option>시/도</option>
              </select>
            </div>
            <div>
              <select>
                <option>시/도</option>
              </select>
            </div>
          </div>
          {/* 휴대폰 번호 */}
          <div>
            <div>
              휴대폰 번호
            </div>
            <div>
            <input class="vti__input" placeholder="‘-’ 빼고 숫자만 입력" value=""/>
            </div>
          </div>
          {/* 비밀번호 */}
          <div>
            <div>비밀번호</div>
            <div>
              <input type='password' placeholder='비밀번호 입력'/>
            </div>
            <div>
              <input type='password' placeholder='비밀번호 입력확인'/>
            </div>
            <div>
              비밀번호는 영문+숫자+특수문자 조합으로 9자~16자로 사용할 수 있습니다.
            </div>
          </div>
          {/* 이름 */}
          <div>
            <div>이름</div>
            <div>
              <input type='text' placeholder='성 (Last name)'/>
            </div>
            <div>
              <input type='text' placeholder='이름 (First name)'/>
            </div>
          </div>
          {/* 성별 */}
          <div>
            <div>성별</div>
            <div>
              <button type='button'>남성</button>
              <button type='button'>여성</button>
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
            <button type='button'>왔어울산 시작하기</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinForm