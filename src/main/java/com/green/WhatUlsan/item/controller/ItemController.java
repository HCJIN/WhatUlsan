package com.green.WhatUlsan.item.controller;

import com.green.WhatUlsan.item.service.ItemService;
import com.green.WhatUlsan.item.vo.AmenitiesVO;
import com.green.WhatUlsan.item.vo.CategoryVO;
import com.green.WhatUlsan.item.vo.ImgVO;
import com.green.WhatUlsan.item.vo.ItemVO;
import com.green.WhatUlsan.util.FileUploadUtil;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RequestMapping("/item")
@RestController
public class ItemController {
    @Resource(name = "itemService")
    private ItemService itemService;

    // 카테고리 조회
    @GetMapping("/getCategoryList")
    public List<CategoryVO> getCategoryList(){
        return itemService.getCategoryList();
    }

    // 편의시설 조회
    @GetMapping("/getAmenitiesList")
    public List<AmenitiesVO> getAmenitiesList(){
        return itemService.getAmenitiesList();
    }

    // 아이템 등록
    @PostMapping("/insertItem")
    public void insertItem(ItemVO itemVO
        , @RequestParam("mainImg")MultipartFile mainImg
        , @RequestParam("subImg")MultipartFile subImg
        , @RequestParam("amenitiesCodes") List<Integer> amenitiesCodes){

        //---- 파일 업로드 ----
        //메인이 되는 이미지 첨부 후 첨부된 원본 파일명, 첨부된 파일명을 리턴 받음
        ImgVO mainImgVO = FileUploadUtil.fileUpload(mainImg);
        mainImgVO.setIsMain("Y");

        //서브가 되는 이미지 첨부 후 첨부된 원본 파일명, 첨부된 파일명을 리턴 받음
        ImgVO subImgVO = FileUploadUtil.fileUpload(subImg);
        subImgVO.setIsMain("N");

        //등록할 상품의 item_code 조회
        int nextItemCode = itemService.getNextItemCode();

        //itemVO에 조회한 item_code 저장
        itemVO.setItemCode(nextItemCode);

        List<AmenitiesVO> amenitiesList = new ArrayList<>();
        for(Integer code : amenitiesCodes){
            AmenitiesVO amenitiesVO = new AmenitiesVO();
            amenitiesVO.setAmenitiesCode(code);
            amenitiesList.add(amenitiesVO);
        }

        // 체크박스 값 itemVO에 추가
        itemVO.setAmenitiesList(amenitiesList);
        System.out.println(itemVO + "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        //상품 정보 등록
        itemService.insertItem(itemVO);

        // 편의시설 정보 등록
        itemService.insertAmenities(itemVO);

        //itemVO 객체에 이미지 정보를 다 저장
        //1. imgVO를 여러개 저장할 수 있는 List 생성
        List<ImgVO> imgList = new ArrayList<>();

        //2. imgList 에 첨부된 이미지 정보 저장
        imgList.add(mainImgVO);
        imgList.add(subImgVO);

        //3. itemVO 에 imgList 저장
        itemVO.setImgList(imgList);

        //상품 이미지 정보 등록
        itemService.insertImgs(itemVO);
    }

    // 전체 아이템 조회
    @GetMapping("/getItemAll")
    public List<ItemVO> getItemAll(){
        return itemService.getItemAll();
    }

}
