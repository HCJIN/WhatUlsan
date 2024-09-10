package com.green.WhatUlsan.board.service;

import com.green.WhatUlsan.board.vo.BoardVO;

import java.util.List;

public interface BoardService {

    //게시글 조회
    List<BoardVO> getContentList();

    //번호에 맞는 게시글 조회
    BoardVO getBoard(int boardNum);

    //게시글 등록
    void insertBoard(BoardVO boardVO);

    //게시글 수정
    void boardUpdate(BoardVO boardVO);
}
