package com.study.util;

import java.util.HashMap;
import java.util.Map;

public class GridUtil {

	public static Map<String,Object> setPageValues(int total,int showRows,int currentPage){
		Map<String,Object> result = new HashMap<String,Object>();
		
		int totalPage = (int)Math.ceil((double) total / showRows);
		int startAt = (currentPage -1) * showRows;
		int endAt = startAt + showRows;
		if(endAt > total) {
			endAt = total;
		}
		
		result.put("totalPage", totalPage);
		result.put("offset", startAt);
		result.put("limit" , endAt);
		
		
		return result;
	}
	
	public static String camelToUnderScore(String camelStr) {
		String regex = "([a-z])([A-Z]+)";
        String replacement = "$1_$2";
        return camelStr.replaceAll(regex, replacement).toUpperCase();
		
	}
}
