import React, { useEffect, useState } from 'react';
import '../css/serviceCenter.css';
import JoinwritingForm from './JoinwritingForm';
import axios from 'axios';
import BoardDetail from './BoardDetail';

const ServiceCenter = () => {

  // 글쓰기창 생성 여부
  const [writing, setWriting] = useState(false);

  // 상세보기 생성 여부
  const [detail, setDetail] = useState(false);

  // 게시글리스트가 저장될 useState
  const [contentList, setContentList] = useState([]);
  
  // 선택된 게시글 번호 저장할 state
  const [selectedBoardNum, setSelectedBoardNum] = useState(null);

  useEffect(() => {
    axios
      .get('/board/getContentList')
      .then((res) => {
        setContentList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [writing, detail]);

  const formatDate = (dateTime) => {
    const date = new Date(dateTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className='serviceCenter-div'>
      {
        writing ? 
        <JoinwritingForm writing={writing} setWriting={setWriting} /> :
        <></>
      }
      {
        detail && selectedBoardNum ?
        <BoardDetail detail={detail} setDetail={setDetail} boardNum={selectedBoardNum} /> : 
        <></>
      }
      <div className='title'>
        <p>고객센터</p>
      </div>
      <div className='section-div'>
        <div className='section-container'>
          <div className='section-container-left'>
            <div className='left-side'>
              <ul className='side-menu-ul'>
                <li><h3>공지사항</h3></li>
                <li><h3>자주하는 질문</h3></li>
                <li><h3>1:1 문의</h3></li>
              </ul>
            </div>
            <div className='cscenter-box'>
              <div className='cscenter-top'>
                <i className="bi bi-telephone"></i>
                <h4>전화문의</h4>
              </div>
              <div className='cscenter-bottom'>
                <h4>1599-1044</h4>
              </div>
            </div>
          </div>
          <div className='section-container-right'>
            <div className='mycont'>
              <div className='right-top-div'>
                <h3 className='right-title'>공지사항</h3>
              </div>
              <div className='right-bottom-div'>
                <div className='tab-content'>
                  <div className='content-wrap'>
                    <ul className='list-ul'>
                      <li className='list-title'>
                        <span>번호</span>
                        <span>내용</span>
                        <span>공지일</span>
                      </li>
                      <li className='bold'>
                        <span>중요</span>
                        <span>[공지] 안드로이드 앱 팅김 오류 현상 관련 안내</span>
                        <span>2024-08-28</span>
                      </li>
                      {
                        contentList.map((content, i) => (
                          <li 
                            className='standard' 
                            key={i} 
                            onClick={() => {
                              setSelectedBoardNum(content.boardNum);  
                              // 클릭된 게시글 번호 설정
                              setDetail(true);  // 상세보기 모달 열기
                            }}>
                            <span>{contentList.length - i}</span>
                            <span>{content.boardTitle}</span>
                            <span>{formatDate(content.createDate)}</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
              <div className='writing'>
                <button 
                  type='button' 
                  className='joinBtn-writing'
                  onClick={() => {
                    setWriting(true);
                  }}
                >글쓰기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCenter;
