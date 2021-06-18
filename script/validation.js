// validation function
function enableValidation(setup) {
    const form = document.querySelector(setup.formSelector);
    const inputList = Array.from(form.querySelectorAll(setup.inputSelector));
    const buttonElement = form.querySelector(setup.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, setup.inactiveButtonClass);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(form, inputElement);
            toggleButtonState(inputList, buttonElement, setup.inactiveButtonClass);
        });
    });
};

// form validality check
function isValid(formElement, inputElement) {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

// check invalid forms 
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

// show error function
function showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_state_invalid');
    errorElement.textContent = errorMessage;
};

//hide error text
function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_state_invalid');
    errorElement.textContent = '';
};


// submit switch
function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}

// validation add card
enableValidation({
    formSelector: '.popup__form_type_add-card',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
});

// validation edit profile
enableValidation({
    formSelector: '.popup__form_type_edit-profile',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
});