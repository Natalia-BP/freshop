let contactForm = document.getElementById('pdrio-contact-main__form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Inputs
    let contactName = document.getElementById('inputName');
    let contactEmail = document.getElementById('inputEmail');
    let contactNumber = document.getElementById('inputNumber');
    let contactSubject = document.getElementById('inputSubject');

    // RegExp
    const lettersAndSpaces = /^[A-Za-z\s]*$/;
    const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const numbersAndSpaces = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    
    // Name
    let nameValidation = lettersAndSpaces.test(contactName.value);
    if (!nameValidation) {
        contactName.classList.add("--invalid");
    } else {
        contactName.classList.remove("--invalid");
        contactName.classList.add("--valid");
    }

    // Email
    let emailValidation = email.test(contactEmail.value);
    if (!emailValidation) {
        contactEmail.classList.add("--invalid");
    } else {
        contactEmail.classList.remove("--invalid");
        contactEmail.classList.add("--valid");
    }
    
    // Number
    let numberValidation = email.test(contactNumber.value);
    if (!numberValidation) {
        contactNumber.classList.add("--invalid");
    } else {
        contactNumber.classList.remove("--invalid");
        contactNumber.classList.add("--valid");
    }
})