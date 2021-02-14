package com.study.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.study.model.CountryVO;
import com.study.model.SearchVO;

@Repository
@Mapper
public interface CountryDao {
	int selectCountryAllCount(SearchVO searchVO);
	List<CountryVO> selectCountryAll(SearchVO searchVO);
}
