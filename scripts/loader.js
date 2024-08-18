document.addEventListener('DOMContentLoaded',
function(){
    let loaderLine = document.getElementById('loaderLine');
    let loader = document.getElementById('loader');
    let content = document.getElementById('content');
    let loaderImage = document.getElementById('loaderImage');
    loaderLine.style.width='100%';
    loaderImage.style.opacity = '1';
    setTimeout(function(){
        loader.style.opacity = '0';
        content.style.display = 'flex';
    }, 3200)
    setTimeout(function(){
        loader.style.display='none';
        content.style.opacity = 1;
    }, 4200);
})