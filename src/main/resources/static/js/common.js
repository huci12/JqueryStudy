

/* * 날짜보기 * strDate : 날짜(YYYYMMDD) * str : 구분자 * */ 
function getDateView(strDate, str)
{ 
    strDate = strDate.replace(/\-/g, ""); 
    return strDate.substring(0, 4) + str + strDate.substring(4, 6) + str + strDate.substring(6, 8); 
} 

/* * 날짜보기 * strDate : 날짜(YYYYMMDD HHMMSS) * str : 날짜 구분자 * str2 : 시간 구분자 * */ 
function getDateTimeView(strDate, str, str2)
{ 
    strDate = strDate.replace(/\-/g, ""); 
    return strDate.substring(0, 4) + str + strDate.substring(4, 6) + str + strDate.substring(6, 8) + " " + strDate.substring(8, 10) + str2 + strDate.substring(10, 12) + str2 + strDate.substring(12, 14); 
} 

// 날짜 셋팅 - 오늘, 일주일, 15일, 한달, 두달 
function fnDateSet(v_start_name, v_end_name, s_year, s_month, s_day, e_year, e_month, e_day, seperator)
{ 
    $("#"+v_start_name ).val(getCalculatedDate(s_year, s_month, s_day, seperator)); 
    $("#"+v_end_name ).val(getCalculatedDate(e_year, e_month, e_day, seperator)); 
} 

function getCalculatedDate(iYear, iMonth, iDay, seperator)
{ 
    //현재 날짜 객체를 얻어옴. 
    var gdCurDate = new Date(); 
    //현재 날짜에 날짜 게산. 
    gdCurDate.setYear ( gdCurDate.getFullYear() + iYear ); 
    gdCurDate.setMonth( gdCurDate.getMonth() + iMonth); 
    gdCurDate.setDate ( gdCurDate.getDate() + iDay ); 
    //실제 사용할 연, 월, 일 변수 받기. 
    var giYear = gdCurDate.getFullYear(); 
    var giMonth = gdCurDate.getMonth()+1; 
    var giDay = gdCurDate.getDate(); 
    //월, 일의 자릿수를 2자리로 맞춘다. 
    giMonth = "0" + giMonth; 
    giMonth = giMonth.substring(giMonth.length-2,giMonth.length); 
    giDay = "0" + giDay; 
    giDay = giDay.substring(giDay.length-2,giDay.length); 
    //display 형태 맞추기. 
    return giYear + seperator + giMonth + seperator + giDay; 
}

/**
 * 유효한 날짜인지 확인
 */
function isValidDate(param) {
    try
    {
        param = param.replace(/-/g,'');

        // 자리수가 맞지않을때
        if( isNaN(param) || param.length!=8 ) {
            return false;
        }
         
        var year = Number(param.substring(0, 4));
        var month = Number(param.substring(4, 6));
        var day = Number(param.substring(6, 8));

        var dd = day / 0;

         
        if( month<1 || month>12 ) {
            return false;
        }
         
        var maxDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var maxDay = maxDaysInMonth[month-1];
         
        // 윤년 체크
        if( month==2 && ( year%4==0 && year%100!=0 || year%400==0 ) ) {
            maxDay = 29;
        }
         
        if( day<=0 || day>maxDay ) {
            return false;
        }
        return true;

    } catch (err) {
        return false;
    }                      
}
/** * 가격숫자만 입력가능체크 및 콤마 * @param obj * @param fLen * @returns {Boolean} */ 
function addComma(obj,fLen) 
{ 
    if(event.keyCode == 37 || event.keyCode == 39 ) 
    { 
        return; 
    } 
    fLen = fLen || 2; 
    var strValue = obj.value.replace(/,|\s+/g,''); 
    var strBeforeValue = (strValue.indexOf('.') != -1)? strValue.substring(0,strValue.indexOf('.')) :strValue ; 
    var strAfterValue = (strValue.indexOf('.') != -1)? strValue.substr(strValue.indexOf('.'),fLen+1) : '' ; 
    if(isNaN(strValue)) 
    { 
        alert('숫자만 입력가능합니다.'); 
        obj.value = ""; 
        return false; 
    } 
    var intLast = strBeforeValue.length-1; 
    var arrValue = new Array; 
    var strComma = ''; 
    
    for(var i=intLast,j=0; i >= 0; i--,j++) 
    { 
        if( j !=0 && j%3 == 0) 
        { 
            strComma = ','; 
        } else { 
            strComma = ''; 
        } 
        arrValue[arrValue.length] = strBeforeValue.charAt(i) + strComma ; 
    } 
    obj.value= arrValue.reverse().join('') + strAfterValue; 
} 
/** * 콤마 만들기 * @param x * @returns */ 
function setComma(x)
{ 
    var pattern = /(^[+-]?\d+)(\d{3})/; 
    x += ''; 
    while (pattern.test(x))
    { 
        x = x.replace(pattern, '$1' + ',' + '$2'); 
    } 
    return x; 
} 

/** * 콤마제거 * @param val * @returns */ 
function removeComma(val) 
{ 
    //console.log("val " + val); 
    if (val == "" || val == undefined) 
    { 
        val =""; 
    } 
    //self.focus(); 
    return val.split(",").join(""); 
} 

//콤마제거후 숫자리턴 
function getInt(val) 
{ 
    if (val == "" || val == undefined || val == null)
    { 
        val ="0"; 
    } 
    return val.split(",").join(""); 
}


function is_number(data) {
	return !isNaN(data);
}


function getDate(dateStr){
	var yyyyMMdd = String(dateStr);
    var year = yyyyMMdd.substring(0,4);
    var month = yyyyMMdd.substring(4,6);
    var day = yyyyMMdd.substring(6,8);

    return new Date(year,month,day);
}


function diffDay(day1 , day2){
	var date1 = getDate(removeRegExp(day1));
	var date2 = getDate(removeRegExp(day2));
	var Difference_In_Time = date2.getTime() - date1.getTime();
	var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

	return Difference_In_Days;
}

function last_day(date_str){
    var yyyyMMdd = String(date_str);
    var days = "31";
    var year = yyyyMMdd.substring(0,4);
    var month = yyyyMMdd.substring(4,6);

    if (Number(month) == 2){
        if (is_leap_year(year+month+"01"))
            days = "29";
        else
            days = "28";
    }else if (Number(month) == 4 || Number(month) == 6 || Number(month) == 9 || Number(month) == 11){
    	days = "30";
    }
    return days;
}

function is_leap_year(date_str){
    var year = date_str.substring(0,4);
    if (year%4 == 0){
        if (year%100 == 0){
        	return (year%400 == 0);
        }else{
        	return true;
        }

    }else{
    	return false;
    }
}

function getBeforeMonth(date, month) {

	var d = new Date(date);
	console.log("d1=" + d );
    var monthOfYear = d.getMonth();
	d.setMonth(monthOfYear - month);
	return getDateStr(d);
}

function getBeforeDays(date, days) {

	var d = new Date(date);
	console.log("d2=" + d );
    var daysOfYear = d.getDate();
	d.setDate(daysOfYear - days);
	return getDateStr(d);
}

function getDateStrNoDash(myDate){
    var year = myDate.getFullYear();
    var month = ("0"+(myDate.getMonth()+1)).slice(-2);
    var day = ("0"+myDate.getDate()).slice(-2);
    return ( year + month + day );
}




function getStrByte(obj, tgt, size, korSize) {
	var korByte = 3; //한글 바이트 기본값 3
	
	if(korSize != undefined && korSize != ""){
		korByte = parseInt(korSize, 10);
	}
	
	var str = obj.value;
	var str_max = size;	
	var p = 0;
	var bytes = 0;
	var len_num = 0;  
	var str2 = "";
 
	if(str != ""){
		for(p=0; p<str.length; p++) {
			(str.charCodeAt(p) > 255) ? bytes+=korByte : bytes++; //한글은 korByte, 영문, 숫자, 공백은 1byte
			if(bytes <= str_max){
				len_num = p + 1;
			}else{
				alert(size + " byte를 초과 입력할수 없습니다.\n초과된 내용은 자동으로 삭제 됩니다.");
				str2 = str.substr(0, len_num);
				obj.value = str2;
				break;
			}
			$(tgt).text(bytes);
		}
	}else{
		$(tgt).text("0");
	}
	obj.focus();
}


/**
 * 글자제한
 * onkeyup="getStrLength(this,'#len', 30, 'Y');"
 * 
 * focus 원치 않는 경우에만 noFocusYn 파라미터를 추가해준다. 
 * (ex: 화면 초기 로딩시 textarea byte수 보여줘야 하는 경우)
 * getStrByte(this,'#byte', 200, 3, 'Y');
 */
function getStrLength (obj, tgt, len, noFocusYn) {
    var str = obj.value;
    str = str.replace(/\r/g, ""); // 엔터제거
    var cLen = str.length;
    
    if (cLen > Number(len)) {
        alert(len + "자를 초과 입력할수 업습니다.\n초과된 내용은 자동으로 삭제 됩니다.");
        obj.value = str.substr(0, len);
        cLen = len;
    } else {
        obj.value = str;
    }
    $(tgt).text(cLen);
    if(noFocusYn == undefined || noFocusYn != "Y"){
        obj.focus();
    }
}

/**
 * <pre>
 * 1. FunctionName : cutString
 * 2. ClassName  : common.js
 * 3. Comment    : 문자열을 길이만큼 자른다.
 * 4. 작성자     : DEV_JANGSIN
 * 5. 작성일     : 2017. 6. 22.
 * </pre>
 *
 * @param str
 * @param len
 * @returns
 */
function cutString (str, len) {
    if (str.length > len && len > 0) {
        return str.substring(0, len - 1) + "..";
    } else {
        return str;
    }
}


function _filter(list, predicate) {
    var new_list = [];
    _each(list, function(val) {
        if (predicate(val)) {
            new_list.push(val);
        }
    });
    return new_list;
}


function _map(list, mapper) {
    var new_list = [];
    _each(list, function(val) {
        new_list.push(mapper(val));
    });
    return new_list;
}


function _each(list, iter) {
    for (var i = 0; i < list.length; i++) {
        iter(list[i]);
    }
    return list;

}

function _curry(fn) {
    return function(a, b) {
        return arguments.length == 2 ?
            fn(a, b) : function(b) { return fn(a, b); };
    }
}

function _curryr(fn) {
    return function(a, b) {
        return arguments.length == 2 ?
            fn(a, b) : function(b) { return fn(b, a); };
    }
}

function _get(obj, key) {
    return obj == null ? nudefined : obj[key];
}


/**
 * 좌측문자열채우기
 * @params
 *  - str : 원 문자열
 *  - padLen : 최대 채우고자 하는 길이
 *  - padStr : 채우고자하는 문자(char)
 */
function lpad(str, padLen, padStr) {
    if (padStr.length > padLen) {
        console.log("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
        return str;
    }
    str += ""; // 문자로
    padStr += ""; // 문자로
    while (str.length < padLen)
        str = padStr + str;
    str = str.length >= padLen ? str.substring(0, padLen) : str;
    return str;
}

/**
 * 우측문자열채우기
 * @params
 *  - str : 원 문자열
 *  - padLen : 최대 채우고자 하는 길이
 *  - padStr : 채우고자하는 문자(char)
 */
function rpad(str, padLen, padStr) {
    if (padStr.length > padLen) {
        console.log("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
        return str + "";
    }
    str += ""; // 문자로
    padStr += ""; // 문자로
    while (str.length < padLen)
        str += padStr;
    str = str.length >= padLen ? str.substring(0, padLen) : str;
    return str;
}


//페이징 사용 예시 
//var moveFunc = function(page , param){alert("클릭한 page는 " + page); console.log(param)}
//paging("page",10 , 98 , 1003,moveFunc,{}});
//param : 목록이 그려질 div , 한 페이지에 보여줄 게시물 개수 , currentPage , totalCount , 페이지 클릭시 실행시킬 함수 , 파람
//페이징
function paging(id , dataPerPage,current , total ,moveFunc , param){
	$("#"+id).html("");
	
	if(!$("#"+id).hasClass("pagination")){
		!$("#"+id).addClass("pagination");	
	}
	//var dataPerPage = 10; //한페이지에 보여줄 로우수
	var pageCount = 10; //보여줄 목록수
	var totalPage = Math.ceil(total / dataPerPage); //총페이지
	var pageGroup = Math.ceil(current / pageCount);
	
	var last = pageGroup * pageCount; //화면에 보여질 마지막 페이지 번호
	if(last > totalPage){
		last = totalPage; 
	}
	var first =((pageGroup-1) * pageCount)+1; //화면에 보여질 첫번째 페이지 번호
	var next = last + 1;
	var prev = (pageGroup - 1 )* pageCount
	
	if(next > totalPage){
		next = totalPage;
	}
	
	if(first == 1){
		prev = 1;
	}
	
	if(totalPage < 1){
		first = last;
	}
	$("#"+id).append('<a href="javascript:void(0)" class="btnFirst" data-page="1">처음 이동</a>'); //1로 move
	$("#"+id).append('<a href="javascript:void(0)" class="btnPrev"data-page="'+prev+'">이전 10페이지</a>'); //-10 으로 이동
	
	for(var i = first ; i <= last ; i++ ){
		if( i == current){
			$("#"+id).append('<span class="current" data-page="'+i+'">'+i+'</span>');
		}else{
			$("#"+id).append('<a href="javascript:void(0)" data-page="'+i+'">'+i+'</a>');
		}
	}
	
	$("#"+id).append('<a href="javascript:void(0)" class="btnNext" data-page="'+next+'">다음 10페이지</a>')//+10으로 이동
	$("#"+id).append('<a href="javascript:void(0)" class="btnLast" data-page="'+totalPage+'">마지막 이동</a>'); // pageCount로 이동
	
	$("#"+id).find("a").off().on("click",function(){
		moveFunc($(this).data("page"),param);	
	});


}

