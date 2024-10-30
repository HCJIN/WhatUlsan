package com.green.WhatUlsan.item.service;

import com.green.WhatUlsan.item.vo.AmenitiesVO;
import com.green.WhatUlsan.item.vo.CategoryVO;
import com.green.WhatUlsan.item.vo.ItemVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("itemService")
public class ItemServiceImpl implements ItemService{
    @Autowired
    private SqlSessionTemplate sqlSession;


    @Override
    public List<CategoryVO> getCategoryList() {
        return sqlSession.selectList("itemMapper.getCategoryList");
    }

    @Override
    public List<AmenitiesVO> getAmenitiesList() {
        return sqlSession.selectList("itemMapper.getAmenitiesList");
    }

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

    @Override
    public List<ItemVO> getItemAll() {
        return sqlSession.selectList("itemMapper.getItemAll");
    }
}
