package com.study.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
public class EmployeeVO extends RowVO{
	Integer empId;
	String empName;
	Integer regionId;
	String regionName;
}
