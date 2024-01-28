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
    let nameValue = contactName.val();
    let nameValidation = lettersAndSpaces.test(nameValue);
    let validNameInput = $(".name.valid-input");
    let emptyNameInput = $(".name.invalid-input.--empty");
    let wrongNameInput = $(".name.invalid-input.--wrong");
    // If it's empty
    if (nameValue.length == 0) {
        emptyNameInput.removeClass("d-none");
        contactName.addClass("is-invalid");
    // If it's wrong
    }  else if (!nameValidation) {
        wrongNameInput.removeClass("d-none");
        emptyNameInput.addClass("d-none");
        contactName.addClass("is-invalid");
    } 
    // If it's OK
    else {
        contactName.removeClass("is-invalid");
        emptyNameInput.addClass("d-none");
        wrongNameInput.addClass("d-none");
        contactName.addClass("is-valid");
        validNameInput.removeClass("d-none");
    }

    // Email
    let emailValue = contactEmail.val();
    let emailValidation = email.test(emailValue);
    let emptyEmailInput = $(".email.invalid-input.--empty");
    let wrongEmailInput = $(".email.invalid-input.--wrong");
    let validEmailInput = $(".email.valid-input");

    // If it's empty
    if (emailValue.length == 0) {
        emptyEmailInput.removeClass("d-none");
        contactEmail.addClass("is-invalid");
    // If it's wrong
    }  else if (!emailValidation) {
        wrongEmailInput.removeClass("d-none");
        emptyEmailInput.addClass("d-none");
        contactEmail.addClass("is-invalid");
    } 
    // If it's OK
    else {
        contactEmail.removeClass("is-invalid");
        validEmailInput.removeClass("d-none")
        emptyEmailInput.addClass("d-none");
        wrongEmailInput.addClass("d-none");
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