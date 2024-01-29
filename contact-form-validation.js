window.addEventListener("DOMContentLoaded", () => {
// Get form ID
let contactForm = document.getElementById('pdrio-contact-main__form');

// Validation
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
    
            // Inputs
            let contactName = $('#inputName');
            let contactEmail = $('#inputEmail');
            let contactNumber = $('#inputNumber');
            let contactMessage = $('#inputTextArea');
            
            // RegExp
            const lettersAndSpaces = /^[A-Za-z\s]*$/;
            const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            const numbersAndSpaces = /(\s*[0-9]+)+/;
                
                // Name ----------------------
                let nameValue = contactName.val();
                let nameValidation = lettersAndSpaces.test(nameValue);
                let validNameInput = $(".name.valid-input");
                let emptyNameInput = $(".name.invalid-input.--empty");
                let wrongNameInput = $(".name.invalid-input.--wrong");
                // If it's empty
                if (nameValue.length == 0) {
                    emptyNameInput.removeClass("d-none");
                    wrongNameInput.addClass("d-none");
                    contactName.addClass("is-invalid");
                    wrongNameInput.addClass("is-invalid");
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
            
                // Email ------------------------
                let emailValue = contactEmail.val();
                let emailValidation = email.test(emailValue);
                let emptyEmailInput = $(".email.invalid-input.--empty");
                let wrongEmailInput = $(".email.invalid-input.--wrong");
                let validEmailInput = $(".email.valid-input");
            
                // If it's empty
                if (emailValue.length == 0) {
                    emptyEmailInput.removeClass("d-none");
                    contactEmail.addClass("is-invalid");
                    wrongEmailInput.addClass("d-none");
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
                
                // Number -----------------------
                let numberValue = contactNumber.val();
                let numberValidation = numbersAndSpaces.test(numberValue);
                let emptyNumberInput = $(".number.invalid-input.--empty");
                let wrongNumberInput = $(".number.invalid-input.--wrong");
                let validNumberInput = $(".number.valid-input");
            
                // If it's empty
                if (numberValue.length == 0) {
                    emptyNumberInput.removeClass("d-none");
                    wrongNumberInput.addClass("d-none");
                    contactNumber.addClass("is-invalid");
                // If it's wrong
                } else if (!numberValidation) {
                    wrongNumberInput.removeClass("d-none");
                    emptyNumberInput.addClass("d-none");
                    contactNumber.addClass("is-invalid");
                // If it's OK
                } else {
                    contactNumber.removeClass("is-invalid");
                    validNumberInput.removeClass("d-none")
                    emptyNumberInput.addClass("d-none");
                    wrongNumberInput.addClass("d-none");
                    contactNumber.addClass("is-valid");
                }
            
                // Subject -----------------------
                let messageValue = contactMessage.val();
                let emptyMessageInput = $(".message.invalid-input.--empty");
                let validMessageInput = $(".message.valid-input");
            
                // If it's empty
                if (messageValue.length == 0) {
                    emptyMessageInput.removeClass("d-none");
                    contactMessage.addClass("is-invalid");
                // If it's OK
                } else {
                    contactMessage.removeClass("is-invalid");
                    validMessageInput.removeClass("d-none")
                    emptyMessageInput.addClass("d-none");
                    contactMessage.addClass("is-valid");
                }
    
                console.log(contactName.hasClass("is-valid"));
            // Form submission
            if (contactName.hasClass("is-valid") && contactEmail.hasClass("is-valid") && contactNumber.hasClass("is-valid") && contactMessage.hasClass("is-valid") ) {
                console.log("estoy aqui?");   
                contactForm.submit();
                // window.location.href = "/thank-you.html";
            };
            });
}
});