package com.green.WhatUlsan.item.service;

import com.green.WhatUlsan.item.vo.AmenitiesVO;
import com.green.WhatUlsan.item.vo.CategoryVO;
import com.green.WhatUlsan.item.vo.ItemVO;

import java.util.List;

public interface ItemService {
    // 카테고리 리스트 전체 조회
    List<CategoryVO> getCategoryList();

    // 편의시설 리스트 전체 조회
    List<AmenitiesVO> getAmenitiesList();

    // 상품등록(맛집등록)
    void insertItem(ItemVO itemVO);
    void insertImgs(ItemVO itemVO);
    void insertAmenities(ItemVO itemVO);
    int getNextItemCode();

    // 아이템 전체 조회
    List<ItemVO> getItemAll();

}
