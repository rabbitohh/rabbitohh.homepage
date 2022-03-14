function $(id)
{

	return document.getElementById(id);
}
function ChangeHeight()
{
	var a=$("bigdiv").offsetWidth;
	var b=a/9*7;
	var c=a/250*3;
	$("bigdiv").style.height=b+"px"; //设定高
	$("bigdiv").style.fontSize=c+"px";//设定字体
}
window.onresize=window.onload=function()
{
	ChangeHeight();
}
function disappear()
{
	$("loadwait").style.opacity=0;
	$("loadwait").style.zIndex=-1;
}
document.onreadystatechange=function ()
{
	setTimeout(disappear, 2000);
}
