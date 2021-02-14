package com.study.model;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class ListVO<T>{
	private Integer page;
	private Integer records;	
	private Integer total;
	private List<T> rows;
}
