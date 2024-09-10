package com.green.WhatUlsan.board.controller;

import com.green.WhatUlsan.board.service.BoardService;
import com.green.WhatUlsan.board.vo.BoardVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/board")
public class BoardController {

    @Resource(name = "boardService")
    private BoardService boardService;

    //게시글 조회
    @GetMapping("/getContentList")
    private List<BoardVO> getContentList(){
        return boardService.getContentList();
    }

    //번호에 맞는 게시글 조회
    @GetMapping("/getBoardDetail/{boardNum}")
    private BoardVO getBoardDetail(@PathVariable("boardNum")int boardNum){
        return boardService.getBoard(boardNum);
    }

    //게시글 등록
    @PostMapping("/insertBoard")
    private void insertBoard(@RequestBody BoardVO boardVO){
        boardService.insertBoard(boardVO);
    }

    //게시글 수정
    @PostMapping("/boardUpdate")
    private void boardUpdate(@RequestBody BoardVO boardVO){
        boardService.boardUpdate(boardVO);
    }

}
