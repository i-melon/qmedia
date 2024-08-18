document.addEventListener('DOMContentLoaded', function() {

    // LOADER LOGIC
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            redirectToThanks()
        }
        else if (xhr.status === 500) {
            handleError()
        }
        // resetForm()

        // document.getElementById("numberForm").style.display="none"
    };
    xhr.onerror = function() {
        handleError()
    };
    xhr.addEventListener("loadstart", function() {
        document.getElementById("global-loader").classList.add('global-loading');
        document.getElementById("global-loader-content").classList.add('global-loading-content');
    });
    xhr.addEventListener("loadend", function() {
        document.getElementById("global-loader").classList.remove('global-loading');
        document.getElementById("global-loader-content").classList.remove('global-loading-content');
    });

    // EMAIL LOGIC
    var currentForm = null;

    document.querySelectorAll('form').forEach((form) => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents default form submit

            currentForm = event.target;
            sendEmail()
        });
    })

    function sendEmail() {
        let phoneInput = currentForm.querySelectorAll('input[name="phone"]')[0];

        if (!checkPhoneNumberInputSize(phoneInput.value)) {
            alert('Неверный телефонный номер! Недостаточное количество цифр!');
            return;
        }

        const data = Object.fromEntries(new FormData(currentForm).entries());

        xhr.open('POST', getMailerUrl());
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
    }

    function handleError() {
        console.error('Error:', xhr.response);
        alert('Произошла какая-то ошибка. Мы обязательно ее решим! ' +
            'Просим вас связаться с нами по почте - info.estetika.agency@gmail.com');
    }

    function redirectToThanks() {
        let aLink = document.createElement('a');
        aLink.href = "./thanks.html"
        aLink.click()
    }

    function checkPhoneNumberInputSize(phoneNumber) {
        return phoneNumber.length === 18;
    }

    function getMailerUrl() {
        return (location.hostname === "localhost" || location.hostname === "127.0.0.1") ?
            "http://localhost:63342/estetika/mailer.php" :
            "https://ads.estetika.agency/mailer.php";
    }
});