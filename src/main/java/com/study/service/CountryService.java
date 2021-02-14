package com.study.service;


import com.study.model.CountryVO;
import com.study.model.ListVO;
import com.study.model.SearchVO;

public interface CountryService {
	ListVO<CountryVO> selectCountryAll(SearchVO searchVO);
}
