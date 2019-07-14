var as=document.querySelectorAll("#href>p>[data-toggle=tab]");
var i=1;
for(var a of as){
	a.onclick=function(){
		var id=this.getAttribute("data-id");
		var div=document.getElementById(id);
		div.style.zIndex=i;
		i++;
	}
}
var as=document.querySelectorAll("#content2>p>[data-toggle=tab]");
var i=1;
for(var a of as){
	a.onclick=function(){
		var id=this.getAttribute("data-id");
		var div=document.getElementById(id);
		div.style.zIndex=i;
		i++;
	}
}