package com.study.web;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.study.model.EmployeeVO;
import com.study.model.ListVO;
import com.study.model.SearchVO;
import com.study.service.EmployeeMgtService;


@Controller
public class EmployeeMgtController {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private EmployeeMgtService employeeMgtService;
	
	@RequestMapping("/employee/selectAllEmployeeList")
	@ResponseBody
	public ListVO<EmployeeVO> selectAllEmployeeList(SearchVO searchVO){
		return employeeMgtService.selectAllEmployeeList(searchVO);
	}
	
	@RequestMapping(value="/employee/updateEmployee",method=RequestMethod.POST, produces={"application/json"})
	@ResponseBody
	public int updateEmployee(@RequestBody EmployeeVO employeeVO) {
		logger.info(employeeVO.toString());
		return employeeMgtService.updateEmployee(employeeVO);
		
	}
}
