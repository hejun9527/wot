(function () {
        var items=document.getElementsByClassName("item");
        var points=document.getElementsByClassName("point");
        var btnleft=document.getElementsByClassName("btn-left");
        var btnright=document.getElementsByClassName("btn-right");
        var index=0;
        var time=0;
        for(var right of btnright){
        	right.onclick=function(){
        	var right=this;
        	    goNext();
                clearInterval(sq);
                fun();
        	}
        }
         for(var left of btnleft){
        	left.onclick=function(){
        	var left=this;
        	    goLose();
                clearInterval(sq);
                fun();
        	}
        }
	var goLose=function () {
            if (index>0){
                index--;
            } else {
                index=5;
            }
            goIndex();
            time=0;
        }
        var clearActive=function () {
            for (var i=0;i<items.length;i++) {
                items[i].className="item";
            }
            for (var i=0;i<points.length;i++) {
                points[i].className="point";
            }
        }
        var goIndex=function () {
            clearActive();
            points[index].className="point active";
            items[index].className="item active";
        }
        var goNext=function () {
            if (index<5){
                index++;
            } else {
                index=0;
            }
            goIndex();
            time=0;
        }
        for (var i=0;i<points.length;i++) {
            points[i].addEventListener("click",function() {
                var pointindex=this.getAttribute("data-index");
                index=pointindex;
                goIndex();
                clearInterval(sq);
                fun();
            })
        }
            function fun(){sq=setInterval(function(){
            	time++;
            	if(time==1){
            		goNext();
            	}
        },3500)}
		fun();
    }());
    


(function(){
 var spans=document.querySelectorAll('ul.tree>[data-toggle="one"]') ;
   for(var li of spans){
   	li.onclick=function(){
   		console.log(1);
   		var li=this;
   		if(li.className=='open'){
   			li.className='open';
   		}else{
   			var open=document.querySelector('ul.tree>[data-toggle="one"].open');
   			open!=null&&(open.className='')
   			li.className='open';
   		}
   	}
   	
   }
   }());
   
   
(function(){
   var spans=document.querySelectorAll('ul.two>[data-toggle="two"]') ;
   for(var li of spans){
   	li.onclick=function(){
   		var li=this;
   		if(li.className=='open1'){
   			li.className='open1';
   		}else{
   			var open1=document.querySelector('ul.two>[data-toggle="two"].open1');
   			open1!=null&&(open1.className='')
   			li.className='open1';
   		}
   	}
   	
   }
   }());





(function(){
 var i=0;
    var LIWIDTH=324;
    var DURATION=112;
    var LICOUNT=7;
    var ulImgs=document.getElementById("ul-imgs");
    function moveTo(to){
      if(to==undefined){
        to=i+1;
      }
      if(i==2){
        if(to>i){
          ulImgs.className="transition";
        }else{
          ulImgs.className="";
          ulImgs.style.marginTOP=-DURATION*LICOUNT+"px";
          setTimeout(function(){
            moveTo(LICOUNT-1);
          },100);
          return;
        }
      }
      i=to;
      ulImgs.style.marginTop=-i*DURATION+"px";
      if(i==LICOUNT){
        i=2;
        setTimeout(function(){
          ulImgs.className="";
          ulImgs.style.marginTop=0;
        },LIWIDTH)
      }
    }
    var btnTop=document.getElementById("btn-top");
    var btnBottom=document.getElementById("btn-bottom");
    var canClick=true;
    btnBottom.onclick=function(){
      move(1)
    }
    function move(n){
      if(canClick){
        moveTo(i+1);
        canClick=false;
        setTimeout(function(){
          canClick=true;
        },LIWIDTH);
      }
    }
    btnTop.onclick=function(){
      move(-1);
    }
    var interval=3000;
    var timer=setInterval(function(){
      moveTo()
    },3000);
    var banner=document.getElementById("banner");
    banner.onmouseover=function(){
      clearInterval(timer);
    }
    banner.onmouseout=function(){
      timer=setInterval(function(){
        moveTo()
      },3000);
    }
    }());
    

(function(){
var d1=document.getElementById("d1");
var fiex=document.getElementById("fiex");
d1.onclick=function(){
	if(fiex.className=='in'){
		d1.style.backgroundImage="url(../img/fpic2.png)"
		fiex.className='out';
	}else{
		d1.style.backgroundImage="url(../img/fpic1.png)"
		fiex.className='in';
	}	
}
}());



var canMove=false;
var offsetX;
pop.onmousedown=function(e){
	canMove=true;
	offsetX=e.offsetX;
}
pop.onmousemove=function(e){
	if(canMove==true){
		var x=e.clientX;
		var left=x-offsetX;
		pop.style.left=left+"px";
	}
}
pop.onmouseup=function(){
	canMove=false;
}











