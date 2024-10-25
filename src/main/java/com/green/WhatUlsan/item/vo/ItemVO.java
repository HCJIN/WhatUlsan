package com.green.WhatUlsan.item.vo;

import lombok.Data;

import java.util.List;

@Data
public class ItemVO {
    private int itemCode;
    private String itemName;
    private String itemIntro;
    private String itemArea;
    private int cateCode;
    private List<ImgVO> imgList;
    private List<AmenitiesVO> amenitiesList;
}
