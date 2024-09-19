package com.green.WhatUlsan.pjw.login.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Value("${naver.client-id}")
    private String clientId;

    @Value("${naver.client-secret}")
    private String clientSecret;

    @Value("${naver.redirect-uri}")
    private String redirectUri;

    private final RestTemplate restTemplate = new RestTemplate();

    // 네이버 로그인 페이지로 리다이렉트
    @GetMapping("/naver")
    public String naverLogin() {
        String naverAuthUrl = UriComponentsBuilder.fromHttpUrl("https://nid.naver.com/oauth2.0/authorize")
                .queryParam("response_type", "code")
                .queryParam("client_id", clientId)
                .queryParam("redirect_uri", redirectUri)
                .build()
                .toUriString();
        return "redirect:" + naverAuthUrl;
    }

    // 네이버 로그인 콜백 처리
    @GetMapping("/naver/callback")
    public String naverCallback(@RequestParam String code) {
        String tokenUrl = "https://nid.naver.com/oauth2.0/token";

        // 액세스 토큰 요청
        String tokenResponse = restTemplate.postForObject(tokenUrl, null, String.class,
                "grant_type=authorization_code",
                "client_id=" + clientId,
                "client_secret=" + clientSecret,
                "redirect_uri=" + redirectUri,
                "code=" + code
        );

        // 액세스 토큰 추출 (JSON 파싱 필요)
        String accessToken = extractAccessToken(tokenResponse);

        // 사용자 정보 요청
        String userInfoUrl = "https://openapi.naver.com/v1/nid/me";
        ResponseEntity<String> userInfoResponse = restTemplate.getForEntity(userInfoUrl, String.class,
                "Authorization=Bearer " + accessToken
        );

        // 사용자 정보를 처리하고, 로그인 성공 페이지로 리다이렉트
        return "로그인 성공: " + userInfoResponse.getBody();
    }

    // 액세스 토큰 추출 메소드 (JSON 파싱 필요)
    private String extractAccessToken(String tokenResponse) {
        // JSON 파싱 로직 추가 필요
        return "parsed-access-token";
    }
}

