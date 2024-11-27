package com.green.WhatUlsan.item.service;

import com.green.WhatUlsan.item.vo.AmenitiesVO;
import com.green.WhatUlsan.item.vo.CategoryVO;
import com.green.WhatUlsan.item.vo.ItemVO;

import java.util.List;
import java.util.Map;

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

    // 카테고리에 해당하는 아이템 조회 + 카테고리 디테일에서 한번더 조회도 가능하게 하는 코드
    List<ItemVO> getItemsByCategory(Map<String, Object> params);

}
