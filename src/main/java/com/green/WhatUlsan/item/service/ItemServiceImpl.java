package com.green.WhatUlsan.item.service;

import com.green.WhatUlsan.item.vo.AmenitiesVO;
import com.green.WhatUlsan.item.vo.CategoryVO;
import com.green.WhatUlsan.item.vo.ItemVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("itemService")
public class ItemServiceImpl implements ItemService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    // 카테고리 리스트 조회
    @Override
    public List<CategoryVO> getCategoryList() {
        return sqlSession.selectList("itemMapper.getCategoryList");
    }

    // 편의시설 리스트 조회
    @Override
    public List<AmenitiesVO> getAmenitiesList() {
        return sqlSession.selectList("itemMapper.getAmenitiesList");
    }

    // 아이템을 등록하는 메서드
    @Override
    public void insertItem(ItemVO itemVO) {
        sqlSession.insert("itemMapper.insertItem", itemVO);
    }

    @Override
    public void insertImgs(ItemVO itemVO) {
        sqlSession.insert("itemMapper.insertImgs", itemVO);
    }

    @Override
    public void insertAmenities(ItemVO itemVO) {
        sqlSession.insert("itemMapper.insertAmenities", itemVO);
    }

    @Override
    public int getNextItemCode() {
        return sqlSession.selectOne("itemMapper.getNextItemCode");
    }

    // 카테고리에 해당하는 아이템 조회 + 카테고리 디테일에서 한번더 조회도 가능하게 하는 코드
    @Override
    public List<ItemVO> getItemsByCategory(Map<String, Object> params) {
        return sqlSession.selectList("itemMapper.getItemsByCategory", params);
    }

}
