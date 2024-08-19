document.addEventListener('DOMContentLoaded', function(){
    "use strict";
    let first = document.getElementById('firstAnimated');
    let second = document.getElementById('secondAnimated');
    let third = document.getElementById('thirdAnimated');
    let fourth = document.getElementById('fourthAnimated');
    let fifth = document.getElementById('fifthAnimated');
    let greenMark = document.getElementById('greenAnimated');
    let goalItem1 =document.getElementById('goalItem1');
    let goalItem2 =document.getElementById('goalItem2');
    let goalItem3 =document.getElementById('goalItem3');
    let goalItem4 =document.getElementById('goalItem4');
    let openGoal = document.getElementById('openGoal');
    let programm = document.getElementById('programm');
    let openProgramm = document.getElementById('openProgramm');

    openGoal.addEventListener("click",() => {
        goalItem1.style.display = 'flex';
        goalItem2.style.display = 'flex';
        goalItem3.style.display = 'flex';
        goalItem4.style.display = 'flex';
        openGoal.style.display = 'none';
    })

    openProgramm.addEventListener("click",() => {
        programm.style.display = 'flex';
        openProgramm.style.display = 'none';
    })
    
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