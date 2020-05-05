    function modal(btnOpenSelector, btnCloseSelector, popupSelector, btnOpenActiveClass='opened', enableScroll=true){
        let open = document.querySelector(btnOpenSelector),
            close = document.querySelector(btnCloseSelector),
            overlay = document.querySelector(popupSelector);
        open.addEventListener('click',function(){
            overlay.style.display='block';
            this.classList.add(btnOpenActiveClass);
            if (!enableScroll){
                document.body.style.overflow = 'hidden';
            }
        })
        close.addEventListener('click',function(){
            overlay.style.display='none';
            open.classList.remove(btnOpenActiveClass);
            if (!enableScroll){
                document.body.style.overflow = '';
            }
        })
    }
