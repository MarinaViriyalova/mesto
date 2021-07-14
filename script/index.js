import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
    editPopupButton,
    addCardPopupButton,
    editProfilePopup,
    closeProfilePopupButton,
    addCardPopup,
    closeAddCardPopupButton,
    popupShowImage,
    closePopupShowImageButton,
    profilePopupForm,
    saveCardForm,
    nameInput,
    jobInput,
    profileName,
    profileJob,
    picNameInput,
    linkInput,
    cardsList,
    cards,
    config
} from "./constants.js"

// render of standart cards
cards.forEach((item) => {
    cardGenerator(item);
});

const profileEditFormValidator = new FormValidator(config, '.popup_type_edit')
profileEditFormValidator.enableValidation()

const addCardFormValidator = new FormValidator(config, '.popup_type_add')
addCardFormValidator.enableValidation()

function cardGenerator(cardItem) {
    const card = new Card(cardItem, '.elements__template');
    const newCard = card.generateCard();
    cardsList.prepend(newCard);
}
// open popup
function openPopup(popup) {
    popup.classList.add('popup_opened');
    popup.addEventListener('mousedown', closePopupOnOverlay);
    document.addEventListener('keydown', closePopupOnEscape);
}

// close Overlay
function closePopupOnOverlay(event) {
    if (event.target === event.currentTarget) {
        closePopup(event.currentTarget);
    }
}

// close Escape
function closePopupOnEscape(event) {
    if (event.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'));
    }
}

// close popup
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    popup.removeEventListener('click', closePopupOnOverlay);
    document.removeEventListener('keydown', closePopupOnEscape);
}

// open popup edit profile
function openEditPopup() {
    openPopup(editProfilePopup);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    profileEditFormValidator.repeatValidation();
}

// save profile
function submitProfileForm(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(editProfilePopup);
}

// save card
function submitAddCardForm(evt) {
    evt.preventDefault();
    const item = {
        name: picNameInput.value,
        link: linkInput.value,
        alt: picNameInput.value
    }
    cardGenerator(item);
    closePopup(addCardPopup);
    saveCardForm.reset();
    addCardFormValidator.repeatValidation();
}

// listeners
editPopupButton.addEventListener('click', openEditPopup);
closeProfilePopupButton.addEventListener('click', () => closePopup(editProfilePopup));
closeAddCardPopupButton.addEventListener('click', () => closePopup(addCardPopup));
closePopupShowImageButton.addEventListener('click', () => closePopup(popupShowImage));
profilePopupForm.addEventListener('submit', submitProfileForm);
addCardPopupButton.addEventListener('click', () => openPopup(addCardPopup));
saveCardForm.addEventListener('submit', submitAddCardForm);

export default openPopup;