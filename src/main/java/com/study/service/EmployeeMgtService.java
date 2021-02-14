package com.study.service;

import com.study.model.EmployeeVO;
import com.study.model.ListVO;
import com.study.model.SearchVO;

public interface EmployeeMgtService {
	ListVO<EmployeeVO> selectAllEmployeeList(SearchVO searchVO);
	int updateEmployee(EmployeeVO employeeVO);
}
