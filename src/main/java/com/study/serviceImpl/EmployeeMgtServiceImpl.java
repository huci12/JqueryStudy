package com.study.serviceImpl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.study.dao.EmployeeMgtDao;
import com.study.model.EmployeeVO;
import com.study.model.ListVO;
import com.study.model.SearchVO;
import com.study.service.EmployeeMgtService;
import com.study.util.GridUtil;

@Service
public class EmployeeMgtServiceImpl implements EmployeeMgtService {

	@Autowired
	EmployeeMgtDao employeeMgtDao;
	
	@Override
	public ListVO<EmployeeVO> selectAllEmployeeList(SearchVO searchVO) {
		// TODO Auto-generated method stub
		ListVO<EmployeeVO> empList = new ListVO<EmployeeVO>();
		if(searchVO.getSearchField() != null) {
			searchVO.setSearchField(GridUtil.camelToUnderScore(searchVO.getSearchField()));
		}
		searchVO.setSidx(GridUtil.camelToUnderScore(searchVO.getSidx()));
		
		
		int total = employeeMgtDao.selectAllEmployeeTotal(searchVO);
		Map<String,Object> map = GridUtil.setPageValues(total , searchVO.getRows(), searchVO.getPage());
		searchVO.setOffset((Integer) map.get("offset"));
		searchVO.setLimit((Integer) map.get("limit"));
		empList.setRows(employeeMgtDao.selectAllEmployeeList(searchVO));
		empList.setRecords(empList.getRows().size());
		empList.setTotal(total);
		empList.setPage(searchVO.getPage());
		
		return empList;
	}

	@Override
	public int updateEmployee(EmployeeVO employeeVO) {
		// TODO Auto-generated method stub
		return employeeMgtDao.updateEmployee(employeeVO);
		
	}

}
