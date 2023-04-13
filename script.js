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
const firstNameBorder = document.querySelector(".signUp__firstName");
const lastNameBorder = document.querySelector(".signUp__lastName");
const emailBorder = document.querySelector(".signUp__email");
const passwordBorder = document.querySelector(".signUp__password");

const resetForm = () => {
    firstNameError.classList.add("hideMessage");
    firstNameIcon.classList.add("hide");
    firstNameBorder.classList.remove("signUp__errorBorder");

    lastNameError.classList.add("hideMessage");
    lastNameIcon.classList.add("hide");
    lastNameBorder.classList.remove("signUp__errorBorder");

    passwordError.classList.add("hideMessage");
    passwordIcon.classList.add("hide");
    passwordBorder.classList.remove("signUp__errorBorder");

    emailError.classList.add("hideMessage");
    emailIcon.classList.add("hide");
    emailBorder.classList.remove("signUp__errorBorder");
}

const isEmpty = () => {
    resetForm();

    let error = 0;

    if (firstName.value == "") {
        firstNameError.classList.remove("hideMessage");
        firstNameIcon.classList.remove("hide");
        firstNameBorder.classList.add("signUp__errorBorder");
        error++;
    }

    if (lastName.value == "") {
        lastNameError.classList.remove("hideMessage");
        lastNameIcon.classList.remove("hide");
        lastNameBorder.classList.add("signUp__errorBorder");
        error++;
    }

    if (password.value == "") {
        passwordError.classList.remove("hideMessage");
        passwordIcon.classList.remove("hide");
        passwordBorder.classList.add("signUp__errorBorder");
        error++;
    }

    if (error > 0) {
        return true;
    }

    return false;
}

// Imported regex expression.
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

form.addEventListener('submit', (e) => {
    if (isEmpty()) {
        e.preventDefault();
    }

    if (!validateEmail(email.value)) {
        emailError.classList.remove("hideMessage");
        emailIcon.classList.remove("hide");
        emailBorder.classList.add("signUp__errorBorder");
        e.preventDefault();
    }

    // Page reloads if form is successful.
});