const form = document.querySelector(".signUp");

// Form inputs
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

// Error states
const firstNameIcon = document.querySelector(".firstName__iconError");
const firstNameError = document.querySelector(".firstName__error");
const lastNameIcon = document.querySelector(".lastName__iconError");
const lastNameError = document.querySelector(".lastName__error");
const emailIcon = document.querySelector(".email__iconError");
const emailError = document.querySelector(".email__error")
const passwordIcon = document.querySelector(".password__iconError");
const passwordError = document.querySelector(".password__error");

form.addEventListener('submit', (e) => {
    if (isEmpty() || !validateEmail()) {
        e.preventDefault();
    }

    // Page reloads if form is successful.
});