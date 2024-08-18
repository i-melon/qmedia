document.addEventListener('DOMContentLoaded', function(){
    "use strict";
    let first = document.getElementById('firstAnimated');
    let second = document.getElementById('secondAnimated');
    let third = document.getElementById('thirdAnimated');
    let fourth = document.getElementById('fourthAnimated');
    let fifth = document.getElementById('fifthAnimated');
    let greenMark = document.getElementById('greenAnimated');
    
    setTimeout(function(){
        first.style.top = '0';
    }, 4500);
    setTimeout(function(){
        second.style.top = '0';
    }, 4600);
    setTimeout(function(){
        third.style.top = '0';
    }, 4700);
    setTimeout(function(){
        fourth.style.top = '0';
    }, 4900);
    setTimeout(function(){
        fifth.style.top = '0';
    }, 5100);
    setTimeout(function(){
        fifth.style.top = '0';
    }, 5300);
    setTimeout(function(){
        greenMark.style.left = '0';
    }, 5800);
})