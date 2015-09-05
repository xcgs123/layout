var	isdrag=false;

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
document.addEventListener('mouseup',up);

//事件代理，点击二级菜单响应事件
var oUl=document.getElementById('menu1');
oUl.onclick=function(ev){
	var ev=ev||event;
	var target=ev.target||ev.srcElement;
	if(target.nodeName.toLowerCase()=='li'){
		alert("hello");
	}
}