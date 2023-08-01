const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');

emailForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = emailInput.value.trim();

    if (validateEmailWithoutRegex(email)) {
        alert('Adresse e-mail valide.');
    } else {
        alert('Adresse e-mail invalide. Veuillez saisir une adresse e-mail valide.');
    }
});

function validateEmailWithoutRegex(email) {
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        return false;
    }

    return true;
}

//-------------------------------------Avec REGEX----------------------------------------------------//
// 
const emailFormR = document.getElementById('emailForm');
const emailInputR = document.getElementById('emailInput');

emailFormR.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = emailInputR.value.trim();

    if (validateEmailWithRegex(email)) {
        alert('Adresse e-mail valide.');
    } else {
        alert('Adresse e-mail invalide. Veuillez saisir une adresse e-mail valide.');
    }
});

function validateEmailWithRegex(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}