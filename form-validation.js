let contactForm = document.getElementById('pdrio-contact-main__form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Inputs
    let contactName = $('#inputName');
    let contactEmail = $('#inputEmail');
    let contactNumber = $('#inputNumber');
    let contactSubject = $('#inputSubject');

    // RegExp
    const lettersAndSpaces = /^[A-Za-z\s]*$/;
    const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const numbersAndSpaces = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    
    // Name
    let nameValue = contactName.value;
    let nameValidation = lettersAndSpaces.test(nameValue);
    if (!nameValidation) {
        contactName.addClass("is-invalid");
    } else {
        contactName.removeClass("is-invalid");
        contactName.addClass("is-valid");
    }

    // Email
    let emailValue = contactEmail.value;
    let emailValidation = email.test(emailValue);
    let emptyEmailInput = $(".invalid-input.--empty");
    let wrongEmailInput = $(".wrong-input.--empty");
    // If it's empty
    if (emailValue.length == 0) {
        emptyEmailInput.removeClass("d-none");
        contactEmail.addClass("is-invalid");
        console.log('Aqui estoy');
        console.log(emptyEmailInput);
    // If it's wrong
    }  else if (!emailValidation) {
        wrongEmailInput.removeClass("d-none");
        contactEmail.addClass("is-invalid");
        console.log('O Aqui estoy')
    } 
    // If it's OK
    else {
        emptyEmailInput.addClass("d-none");
        wrongEmailInput.addClass("d-none");
        contactEmail.removeClass("is-invalid");
        contactEmail.addClass("is-valid");
    }
    
    // Number
    let numberValidation = numbersAndSpaces.test(contactNumber.value);
    if (!numberValidation) {
        contactNumber.addClass("is-invalid");
    } else {
        contactNumber.removeClass("is-invalid");
        contactNumber.addClass("is-valid");
    }
});