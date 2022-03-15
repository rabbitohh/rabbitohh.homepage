function fid(id)
{

	return document.getElementById(id);
}
function ChangeHeight()
{
	var width=document.documentElement.clientWidth;
	var height=document.documentElement.clientHeight;
	var a=fid("bigdiv").offsetWidth;
	var bl=width/height;
	var num=$("#bigdiv li").length;
	var wnum=Math.ceil(bl/0.4);
	var hnum=Math.ceil(num/wnum);
	var hperc=1/hnum;
	var wperc=1/wnum;
	console.log($("#bigdiv li").length);
	$("mask1").siblings().css("height",hperc*100+"%");
	$("mask1").siblings().css("width",wperc*85+"%");
	$("mask1").siblings().css("margin-left",wperc*7.5+"%");
	$("mask1").siblings().css("margin-right",wperc*7.5+"%");
	fid("bigdiv").style.height=((a/wnum)*1.38*hnum)+"px"; //设定高
	fid("bigdiv").style.fontSize=(a/250*hnum)+"px";//设定字体
}
/*$(document).ready(function()
{
  $("mask1").siblings().css("height",perc+"%");
});*/
window.onresize=window.onload=function()
{
	ChangeHeight();
}
function disappear()
{
	fid("loadwait").style.opacity=0;
	fid("loadwait").style.zIndex=-1;
}
document.onreadystatechange=function ()
{
	setTimeout(disappear, 2000);
}
