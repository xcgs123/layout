var isDialogTitle=false;
            
            function down(e){
                if(e.target.className.indexOf('dialog-title')!=-1){
                    isDialogTitle=true;
                }
            }
            
            function move(e){
                var dialog=document.getElementById('dlgTest');
                if(isDialogTitle){//只有点击Dialog Title的时候才能拖动
                    dialog.style.left=e.clientX+'px';
                    dialog.style.top=e.clientY+'px';
                }
            }
            
            function up(e){
                isDialogTitle=false;
            }
            
            document.addEventListener('mousedown',down);
            document.addEventListener('mousemove',move);
            document.addEventListener('mouseup',up);