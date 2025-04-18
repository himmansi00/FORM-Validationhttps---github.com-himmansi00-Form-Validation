//First Name
let firstNameInput = document.getElementById("first-name-input");
let firstNameError = document.getElementById("first-name-error");
let emptyFirstNameError = document.getElementById("empty-first-name");

//Last Name
let lastNameInput = document.getElementById("last-name-input");
let lastNameError = document.getElementById("last-name-error");
let emptyLastNameError = document.getElementById("empty-last-name");

//Phone
let phoneInput = document.getElementById("phone");
let phoneError = document.getElementById("phone-error");
let emptyPhoneError = document.getElementById("empty-phone");

//Email
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");

//Password
let passwordInput = document.getElementById("password");
let passwordError = document.getElementById("password-error");
let emptyPasswordError = document.getElementById("empty-password");

//Verify Password
let verifyPasswordInput = document.getElementById("verify-password");
let verifyPasswordError = document.getElementById("verify-password-error");
let emptyVerifyPasswordError = document.getElementById("empty-verify-password");

//Submit
let submitButton = document.getElementById("submit-button");

//Valid
let validclasses = document.getElementsByClassName("valid");
let invalidclasses = document.getElementsByClassName("error");

//Password verification
const passwordVerify = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\$\%\^\&\!@\#\*\(\)\+\=`~\?\>\<]).{8,}$/;
    return regex.test(password) && password.length >= 8;
};

//text Verification (If input contain only text)
const textVerify = (text) => {
    const regex = /^[a-zA-Z]{8,}$/;
    return regex.text(text);
};

//Phone Number Verification 
const phoneVerify = (number) => {
    const regex = /^[0-9]{10}$/;
    return regex.text(number);
};

//Phone Number Verification 
const emailVerify = (input) => {
    const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\,]{3,}$/;
    return regex.text(input);
};

//For Empty input -  accepts(input, empty error for that input and other errors)
const emptyUpdate = (inputReference, emptyErrorReference, otherErrorReference) => {
    if(!inputReference.value) {
        //input is null/empty
        emptyErrorReference.classList.remove("hide");
        otherErrorReference.classList.add("hide");
        inputReference.classList.add("error");
    }
    else {
         //input has some content
        emptyErrorReference.classList.add("hide");
    }
};

//For error styling and displaying error message
const errorUpdate = (inputReference, errorReference) => {
     errorReference.classList.remove("hide");
     inputReference.classList.remove("valid");
     inputReference.classList.add("error");
};

//For no errors
const validInput = (inputReference) => {
    inputReference.classList.remove("error");
    inputReference.classList.add("valid");
};
  
//First Name
firstNameInput.addEventListener("input", () => {
    if(textVerify(firstNameInput.value)){
        //if verification returns true
        firstNameError.classList.add("hide");
        validInput(firstNameInput);
    }
    else {
        //for false
        errorUpdate(firstNameInput, firstNameError);
        //empty checker
        emptyUpdate(firstNameInput, emptyFirstNameError, firstNameError);
    }
});

//Last Name
lastNameInput.addEventListener("input", () => {
    if(textVerify(lastNameInput.value)){
        //if verification returns true
        lastNameError.classList.add("hide");
        validInput(lastNameInput);
    }
    else {
        //for false
        errorUpdate(lastNameInput, lastNameError);
        //empty checker
        emptyUpdate(lastNameInput, emptyLastNameError, lastNameError);
    }
});

//Phone
phoneInput.addEventListener("input", () => {
    if(phoneVerify(phoneInput.value)){
        //if verification returns true
        phoneError.classList.add("hide");
        validInput(phoneInput);
    }
    else {
        //for false
        errorUpdate(phoneInput, phoneError);
        //empty checker
        emptyUpdate(phoneInput, emptyPhoneError, phoneError);
    }
});

//Email
emailInput.addEventListener("input", () => {
    if(emailVerify(emailInput.value)){
        //if verification returns true
        emailError.classList.add("hide");
        validInput(emailInput);
    }
    else {
        //for false
        errorUpdate(emailInput, emailError);
        //empty checker
        emptyUpdate(emailInput, emptyEmailError, emailError);
    }
});

//Password
passwordInput.addEventListener("input", () => {
    if(passwordVerify(passwordInput.value)){
        //if verification returns true
        passwordError.classList.add("hide");
        validInput(passwordInput);
    }
    else {
        //for false
        errorUpdate(passwordInput, passwordError);
        //empty checker
        emptyUpdate(passwordInput, emptyPasswordError, passwordError);
    }
});

//Verify Password
verifyPasswordInput.addEventListener("input", () => {
    if(verifyPasswordInput.value === passwordInput.value) {
        //if verification returns true
        verifyPasswordError.classList.add("hide");
        validInput(verifyPasswordInput);
    }
    else {
        //for false
        errorUpdate(verifyPasswordInput, verifyPasswordError);
        //empty checker
        emptyUpdate(verifyPasswordInput, emptyVerifyPasswordError, verifyPasswordError);
    }
});

//Submit Button
submitButton.addEventListener("click", () => {
    if(validclasses.length == 6 && invalidclasses.length == 0) {
        alert("Success");
    } else {
        alert("Error");
    }
});