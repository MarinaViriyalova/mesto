class FormValidator {
    constructor(config, formSelector) {
            this._form = document.querySelector(formSelector);
            this._inputList = this._form.querySelectorAll(config.inputSelector);
            this._submitButton = this._form.querySelector(config.submitButtonSelector);
            this._inactiveButtonClass = config.inactiveButtonClass;
            this._invalidInputClass = config.invalidInputClass
        }
        // check inputs validity 
    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    };

    // show error message
    _showInputError(inputElement) {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._invalidInputClass);
        errorElement.textContent = inputElement.validationMessage;
    };

    // hide error message
    _hideInputError(inputElement) {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._invalidInputClass);
        errorElement.textContent = '';
    };
    // check unvalid forms
    _hasInvalidInput() {
        return Array.from(this._inputList).some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }

    // submit button state switch
    _toggleButtonState() {
            if (this._hasInvalidInput()) {
                this._submitButton.classList.add(this._inactiveButtonClass);
                this._submitButton.setAttribute('disabled', true);
            } else {
                this._submitButton.classList.remove(this._inactiveButtonClass);
                this._submitButton.removeAttribute('disabled', true);
            }
        }
        // listeners
    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButtonState();
            });
        });
    }

    //enable validation
    enableValidation() {
        this._setEventListeners();
    }

    resetValidation() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });
    }

}

export default FormValidator;