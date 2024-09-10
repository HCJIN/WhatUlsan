import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BoardDetail = ({detail, setDetail, boardNum}) => {

  const [boardDetail, setBoardDetail] = useState({});

  useEffect(()=>{
    axios
    .get(`/board/getBoardDetail/${boardNum}`)
    .then((res)=>{
      setBoardDetail(res.data)
      console.log(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  function onChange(e){
    setBoardDetail({
      ...boardDetail,
      [e.target.name] : e.target.value
    })
  }

  function goUpdate(){
    axios
    .post(`/board/boardUpdate`, boardDetail)
    .then((res)=>{

    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className='joinwritingForm-div'>
      <div className='content-box'>
        <table className='content-table'>
          <colgroup>
            <col width='30%'></col>
            <col width='*'></col>
          </colgroup>
          <tbody>
            <tr className='writer-tr'>
              <td colSpan={2}>
                <div>
                  <p>
                    <span>작성자 : </span>
                    <span>이름</span>
                  </p>
                  <i className="bi bi-x-circle-fill"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>제목</td>
              <td>
                <input type='text' name='boardTitle' value={boardDetail.boardTitle || ''} onChange={(e)=>{onChange(e)}}></input>
              </td>
            </tr>
            <tr>
              <td>
                내용
              </td>
              <td>
                <textarea name='boardContent' value={boardDetail.boardContent || ''} onChange={(e)=>{onChange(e)}}></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='writingFromBtn-div'>
          <button type='button' className='joinBtn-writing' onChange={()=>{
            goUpdate()
          }}>확인</button>
        </div>
      </div>
    </div>
  )
}

export default BoardDetail