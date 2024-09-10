package com.green.WhatUlsan.pjw.login.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("loginService")
public class LoginServiceImpl implements LoginService{
    @Autowired
    private SqlSessionTemplate sqlSession;


}
