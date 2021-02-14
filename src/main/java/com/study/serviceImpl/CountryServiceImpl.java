package com.study.serviceImpl;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.study.dao.CountryDao;
import com.study.model.CountryVO;
import com.study.model.ListVO;
import com.study.model.SearchVO;
import com.study.service.CountryService;
import com.study.util.GridUtil;

@Service
public class CountryServiceImpl implements CountryService{

	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private CountryDao countryDao;

	@Override
	public ListVO<CountryVO> selectCountryAll(SearchVO searchVO) {
		ListVO<CountryVO> countryList = new ListVO<CountryVO>();
		if(searchVO.getSearchField() != null) {
			searchVO.setSearchField(GridUtil.camelToUnderScore(searchVO.getSearchField()));
		}
		searchVO.setSidx(GridUtil.camelToUnderScore(searchVO.getSidx()));
		int total = countryDao.selectCountryAllCount(searchVO);
		Map<String,Object> map = GridUtil.setPageValues(total , searchVO.getRows(), searchVO.getPage());
		searchVO.setOffset((Integer) map.get("offset"));
		searchVO.setLimit((Integer) map.get("limit"));
		
		countryList.setRows(countryDao.selectCountryAll(searchVO));
		countryList.setRecords(countryList.getRows().size());
		countryList.setTotal(total);
		countryList.setPage(searchVO.getPage());
		return countryList;
		
	}
	
	

}
