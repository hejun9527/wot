var as=document.querySelectorAll("#content1>div>[data-toggle=reg]");
var i=1;
for(var a of as){
	a.onclick=function(){
		var id=this.getAttribute("data-id");
		var div=document.getElementById(id);
		div.style.zIndex=i;
		i++;
	}
}
var as=document.querySelectorAll("#content2>div>[data-toggle=reg]");
var i=1;
for(var a of as){
	a.onclick=function(){
		var id=this.getAttribute("data-id");
		var div=document.getElementById(id);
		div.style.zIndex=i;
		i++;
	}
}