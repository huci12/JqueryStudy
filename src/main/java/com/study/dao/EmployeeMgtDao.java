package com.study.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.study.model.EmployeeVO;
import com.study.model.SearchVO;

@Repository
@Mapper
public interface EmployeeMgtDao {

	int selectAllEmployeeTotal(SearchVO searchVO);

	List<EmployeeVO> selectAllEmployeeList(SearchVO searchVO);
	
	int updateEmployee(EmployeeVO employeeVO);

}
