// Wait for website to fully load
window.addEventListener("DOMContentLoaded", () => {

// Get form ID
let newsletterForm = document.getElementById('pdrio-contact-main__newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
        // Prevent form submission
        e.preventDefault();
        
        // Newsletter input
        let newsletterInput = $("#inputNewsletter");

        // RegExp for Email
        const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        // Newsletter Validation -----------------
        let newsletterValue = newsletterInput.val();
        let newsletterValidation = email.test(newsletterValue);
        let validNewsletterInput = $(".newsletter.valid-input");
        let wrongNewsletterInput = $(".newsletter.invalid-input.--wrong");

       if (!newsletterValidation) { 
        wrongNewsletterInput.removeClass("d-none");
        newsletterInput.addClass("is-invalid"); 
    
        } else {
            newsletterInput.removeClass("is-invalid");
            wrongNewsletterInput.addClass("d-none");
            newsletterInput.addClass("is-valid");
            validNewsletterInput.removeClass("d-none");}

    if (newsletterInput.hasClass("is-valid")) {
            newsletterForm.submit();
        };
    });

};
});