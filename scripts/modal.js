document.addEventListener('DOMContentLoaded', function(){
    "use strict";
    let contentBlock = document.getElementById('content');
    let modalDialog = document.getElementById('modalDialog');
    let modal = document.getElementById('modal');
    let openModalButton2 = document.getElementById('openModalButton2');
    let closeModalButton = document.getElementById('closeModal');
    let openSecondModal1 = document.getElementById('openSecondModal1');
    let modalText = document.getElementById('modalText');
    let modalTitle = document.getElementById('modalTitle');
    let openSecondModal2 = document.getElementById('openSecondModal2');

    let sendForm = document.getElementById('sendForm');

    function openModal(){
        modal.style.display = 'flex';
        contentBlock.style.filter ='blur(4px)';
        setTimeout(function(){
            modalDialog.style.height = 'fit-content';
        }, 200);
    }
    function closeModal(){
        if (event.target === modal || event.target ===closeModalButton) {
            modalDialog.style.height = '0';
            contentBlock.style.filter ='none';
            setTimeout(function(){
                modal.style.display = 'none';
            }, 500);
            modalText.innerHTML = 'Наш менеджер ответит на все вопросы, подберет лучшее решение для вас.';
            modalTitle.innerHTML = 'Оставьте заявку';
        }
    }
    openModalButton2.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal);
    closeModalButton.addEventListener('click', closeModal)
    
    

    // sendForm.addEventListener('click', ()=>window.location.href = "./thanks.html")
})