package com.green.WhatUlsan.board.service;

import com.green.WhatUlsan.board.vo.BoardVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("boardService")
public class BoardServiceImpl implements BoardService{

    @Autowired
    private SqlSessionTemplate sqlSession;

    //게시글 조회
    @Override
    public List<BoardVO> getContentList() {
        return sqlSession.selectList("boardMapper.getContentList");
    }

    //번호에 맞는 게시글 조회
    @Override
    public BoardVO getBoard(int boardNum) {
        return sqlSession.selectOne("boardMapper.getBoard", boardNum);
    }

    //게시글 이동
    @Override
    public void insertBoard(BoardVO boardVO) {
        sqlSession.insert("boardMapper.insertBoard", boardVO);
    }

    @Override
    public void boardUpdate(BoardVO boardVO) {
        sqlSession.update("boardMapper.boardUpdate", boardVO);
    }
}
