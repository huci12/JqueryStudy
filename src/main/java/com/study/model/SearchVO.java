package com.study.model;

import lombok.Data;

@Data
public class SearchVO {
	private Integer page;
	private Integer rows;
	private Integer offset;
	private Integer limit;
	private String sidx;
	private String sord;
	private String searchField;
	private String searchString;	
}
