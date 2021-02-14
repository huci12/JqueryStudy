package com.study.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.study.model.CountryVO;
import com.study.model.ListVO;
import com.study.model.SearchVO;
import com.study.service.CountryService;


@Controller
public class CountryController {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

		
	@Autowired
	private CountryService countryService;
	
	@RequestMapping(value="/country/selectAll",method=RequestMethod.POST, produces={"application/json"})
	@ResponseBody
	public ListVO<CountryVO> selectAllCountry(SearchVO searchVO){
		logger.info("search {}" , searchVO);
		return countryService.selectCountryAll(searchVO);
	}
}
