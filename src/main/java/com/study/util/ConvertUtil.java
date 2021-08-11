package com.market.util;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class ConvertUtil {

	// Map merge
	public static Map<String, Object> mapMerge(Map<String, Object>... maps) {

		Map<String, Object> inputs = new HashMap<String, Object>();
		for (Map<String, Object> map : maps) {
			inputs.putAll(map);
		}
		return inputs;
	}

	// toCamel
	public static Map<String, Object> toCamelStrKey(Map<String, Object> map) {
		Map<String, Object> camelMap = new HashMap<String, Object>();
		Set<String> keySet = map.keySet();

		Iterator<String> keyItr = keySet.iterator();

		while (keyItr.hasNext()) {
			String key = keyItr.next();
			camelMap.put(snakeToCamel(key), map.get(key));

		}
		return camelMap;
	}

	public static Map<String, Object> toSnakeStrKey(Map<String, Object> map) {

		Map<String, Object> snakeMap = new HashMap<String, Object>();
		Set<String> keySet = map.keySet();

		Iterator<String> keyItr = keySet.iterator();

		while (keyItr.hasNext()) {
			String key = keyItr.next();
			snakeMap.put(camelToSnake(key), map.get(key));

		}
		return snakeMap;

	}

	public static String snakeToCamel(String str) {
		str = str.toLowerCase();
		while (str.contains("_")) {
			str = str.replaceFirst("_[a-z]", String.valueOf(Character.toUpperCase(str.charAt(str.indexOf("_") + 1))));
		}
		return str;
	}

	public static String camelToSnake(String str) {
		String regex = "([a-z])([A-Z]+)";
		String replacement = "$1_$2";
		return str.replaceAll(regex, replacement).toUpperCase();
	}


}
