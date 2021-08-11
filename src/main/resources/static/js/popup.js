function popup(_href, _width, _height, _scroll,_id , confirmFunction , cancelFunction)
{
    if (!_scroll) _scroll = 'no';
    else _scroll = 'yes';
    var _left = parseInt((screen.width - _width) / 2, 10),
        _top = parseInt((screen.height - _height) / 2, 10) - 100;
    var popup =  window.open( _href, 'popup'+_id, 'top='+ _top +', left='+ _left +', width='+ _width +', height='+ _height +', scrollbars='+ _scroll +', toolbar=no, menubar=no, location=no, resizable=true, status=yes');

	popup.commonParam = {};
	popup.commonParam.confirmFunction = confirmFunction;
	popup.commonParam.cancelFunction = cancelFunction;
    popup.focus();
}
