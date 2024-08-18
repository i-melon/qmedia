document.addEventListener('DOMContentLoaded', function(){
    var counterElement = document.getElementById('timer');
    let goBackButton = document.getElementById('goBack');


    goBackButton.addEventListener('click', function(){
        window.location.href = "./index.html";
    })
      
        // Начальное значение счетчика
        var count = 8;
      
        // Увеличиваем счетчик каждую секунду до 10
        var intervalId = setInterval(function() {
          if (count === 0) {
            // Когда счетчик достигает 10, останавливаем интервал
            clearInterval(intervalId);
            window.location.href = "./index.html";
          } else {
            // Иначе увеличиваем счетчик и обновляем значение на странице
            count--;
            counterElement.textContent = count;
          }
        }, 800); 
})