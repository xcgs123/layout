/*var	isdrag=false;

function down(e){
    if(e.target.className.indexOf('but')!=-1){
         isdrag=true;
}
 }          

function move(e){
	var dragment=document.getElementById("drag-container");
	if(isdrag){
	dragment.style.left=e.clientX+"px";
	dragment.style.top=e.clientY+"px";
    }
}

 function up(e){
    isdrag=false;
}
document.addEventListener('mousedown',down);
document.addEventListener('mousemove',move);
document.addEventListener('mouseup',up);*/

function getByClass(clsName,parent){
  var oParent=parent?document.getElementById(parent):document,
      eles=[],
      elements=oParent.getElementsByTagName('*');

  for(var i=0,l=elements.length;i<l;i++){
    if(elements[i].className==clsName){
      eles.push(elements[i]);
    }
  }
  return eles;
}
window.onload=drag;

function drag(){
   var oTitle=getByClass('but','drag-container')[0];
   // 拖曳·`
   oTitle.onmousedown=down;
}

function down(event){
	event=event||window.event;
	var oDrag=document.getElementById("drag-container"),
	    disX=event.clientX-oDrag.offsetLeft,
	    disY=event.clientY-oDrag.offsetTop;
	document.onmousemove=function(event){
		event=event||window.event;
		move(event,disX,disY);
	}

	document.onmouseup=function(){
		document.onmousemove=null;
		document.onmouseup=null;
	}
}

function move(e,posX,posY){
	var oDrag=document.getElementById("drag-container"),
	l=e.clientX-posX,
	t=e.clientY-posY,
	winW=document.documentElement.clientWidth||document.body.clientWidth,
	winH=document.documentElement.clientHeight||document.body.clientHeight,
	maxW=winW-oDrag.offsetWidth,
	maxH=winH-oDrag.offsetHeight;
  if(l<0){
    l=0;
  }else if(l>maxW){
    l=maxW;
  }
  if(t<0){
    t=10;
  }else if(t>maxH){
    t=maxH;
  }
  oDrag.style.left=l+'px';
  oDrag.style.top=t+'px';
}

//事件代理，点击二级菜单响应事件
var oUl=document.getElementById('menu1');
oUl.onclick=function(ev){
	var ev=ev||event;
	var target=ev.target||ev.srcElement;
	if(target.nodeName.toLowerCase()=='li'){
		alert("hello");
	}
}