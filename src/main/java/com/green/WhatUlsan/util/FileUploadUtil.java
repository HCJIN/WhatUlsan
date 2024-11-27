package com.green.WhatUlsan.util;

import com.green.WhatUlsan.item.vo.ImgVO;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

public class FileUploadUtil {

    public static ImgVO fileUpload(MultipartFile uploadFile){
        ImgVO imgVO = null;

        //input 태그에 파일을 선택했을 때만 첨부기능 실행
        if(!uploadFile.isEmpty()){
            //imgVO 객체 생성
            imgVO = new ImgVO();

            //업로드 될 경로
            String uploadPath = "D:\\dev\\WhatUlsan\\src\\main\\resources\\static\\imgs\\upload\\";

            //내가 선택한 원본 파일명
            String originFileName = uploadFile.getOriginalFilename();

            //첨부될 파일명을 랜덤하게 생성
            String uuid = UUID.randomUUID().toString();

            //원본 파일에서 확장자만 추출
            String a = "abc.jpg";
            a.substring(3);
            String b = "ab.cd.ef";
            //indexOf : 찾는 문자의 index(위치)
            b.indexOf(".");
            b.lastIndexOf(".");

            String extension = originFileName.substring(originFileName.lastIndexOf("."));

            //첨부될 파일명
            String attachedFileName = uuid + extension;

            //첨부될 파일 생성
            File file = new File(uploadPath + attachedFileName);

            //첨부 기능 실행
            try {
                uploadFile.transferTo(file);

                //첨부된 파일 정보를 imgVO에 저장
                imgVO.setOriginFileName(originFileName);
                imgVO.setAttachedFileName(attachedFileName);
            } catch (IOException e) {
                throw  new RuntimeException(e);
            }
        }

        return  imgVO;
    }

}
