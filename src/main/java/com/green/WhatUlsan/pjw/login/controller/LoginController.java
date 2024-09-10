package com.green.WhatUlsan.pjw.login.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/login")
@RestController
public class LoginController {



    //일반 로그인



    //네이버 로그인
    @GetMapping("/naver")
    void setNaverLogin(){

    }
}
