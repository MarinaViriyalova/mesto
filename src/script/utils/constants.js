// choose profile edit button
const editPopupButton = document.querySelector('.profile__edit-button');
// choose add card button
const addCardPopupButton = document.querySelector('.profile__add-button');
// find name input
const nameInput = document.querySelector('.popup__input_text_name');
// find job input
const jobInput = document.querySelector('.popup__input_text_work');
// avatar 
const profileAvatar = document.querySelector('.profile__avatar-container');

const config = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    invalidInputClass: 'popup__input_state_invalid'
}

const configApi = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-26',
    headers: {
        authorization: 'f8c29828-f721-4342-b2ca-aad285830080',
        'Content-Type': 'application/json'
    }
}

export { editPopupButton, profileAvatar, addCardPopupButton, nameInput, jobInput, config, configApi }