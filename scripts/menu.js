document.addEventListener('DOMContentLoaded', function(){
    "use strict";
    let openMenuButton = document.getElementById('openMenuButton');
    let menu = document.getElementById('menu');
    openMenuButton.addEventListener('click', function(){
        menu.style.display = 'flex';
        setTimeout(function(){
            menu.style.opacity = '1';
        }, 100)
        
    })
    menu.addEventListener('click', function(){
        menu.style.opacity = '0';
        setTimeout(function(){
            menu.style.display = 'none';
        }, 300)
        
    })
})