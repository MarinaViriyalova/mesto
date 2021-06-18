// for all popups
const popups = document.querySelectorAll('.popup');
const closePopupButtons = document.querySelectorAll('.popup__close');

// Edit Profile Form
const editProfilePopup = document.querySelector('.popup_type_edit');
const editPopupButton = document.querySelector('.profile__edit-button');
const closeProfilePopupButton = editProfilePopup.querySelector('.popup__close');
const nameInput = editProfilePopup.querySelector('.popup__input_text_name');
const jobInput = editProfilePopup.querySelector('.popup__input_text_work');
const profileName = document.querySelector('.profile__title-text');
const profileJob = document.querySelector('.profile__subtitle-text');
const profilePopupForm = editProfilePopup.querySelector('.popup__form');

// Add Pictures Form
const addCardPopupButton = document.querySelector('.profile__add-button');
const addCardPopup = document.querySelector('.popup_type_add');
const closeAddCardPopupButton = addCardPopup.querySelector('.popup__close');
const saveCardForm = addCardPopup.querySelector('.popup__form');
const picNameInput = document.querySelector('.popup__input_value_pic-name');
const linkInput = document.querySelector('.popup__input_value_link');

// Show Pictire
const popupShowImage = document.querySelector('.popup_type_pic');
const closePopupShowImageButton = popupShowImage.querySelector('.popup__close');
const popupCardPicture = popupShowImage.querySelector('.popup__pic');
const popupCardTitle = popupShowImage.querySelector('.popup__pic-title');

// Elements
const cardsList = document.querySelector('.elements');
const itemTemplate = document.querySelector('.elements__template').content;

// open popup
function openPopup(popup) {
    popup.classList.add('popup_opened');
    popup.addEventListener('mousedown', closePopupOverlay);
    document.addEventListener("keydown", closePopupEsc);

}

// close popup
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    popup.addEventListener('mousedown', closePopupOverlay);
    document.removeEventListener("keydown", closePopupEsc);
}

// Close popup - overlay
function closePopupOverlay(event) {
    if (event.target === event.currentTarget) {
        closePopup(event.currentTarget);
    }
}

// Close popup - esc 
function closePopupEsc(event) {
    if (event.key === "Escape") {
        const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
}

// render function of each card
function createNewCard(card) {
    const ulElement = itemTemplate.cloneNode(true);
    ulElement.querySelector('.element__title').innerText = card.name;
    const cardImage = ulElement.querySelector('.element__image');
    cardImage.setAttribute('src', card.link);
    cardImage.setAttribute('alt', card.alt);
    ulElement.querySelector('.element__delete-button').addEventListener('click', deleteCard);
    ulElement.querySelector('.element__like-button').addEventListener('click', likeCard);
    cardImage.addEventListener('click', () => openImagePopup(card.name, card.link));
    return ulElement;
};

// add element function
function renderCard(elem) {
    cardsList.prepend(elem);
}

// open popup edit form
function openEditPopup() {
    openPopup(editProfilePopup);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

// save profile 
function submitProfileForm(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(editProfilePopup);
}

// open popup add elements
function openAddCardPopup() {
    openPopup(addCardPopup);
}

// save element
function submitAddCardForm(evt) {
    evt.preventDefault();
    const card = {
        name: picNameInput.value,
        link: linkInput.value,
    }
    const newCard = createNewCard(card);
    renderCard(newCard);
    closePopup(addCardPopup);
    const inputList = Array.from(addCardPopup.querySelectorAll('.popup__input'));
    const buttonElement = addCardPopup.querySelector('.popup__submit');
    saveCardForm.reset(); //Сбрасываю форму после сохранения карточки
    toggleButtonState(inputList, buttonElement, 'popup__submit_disabled'); //Вызываем функцию переключения сабмит-кнопки
}

// delete element
function deleteCard(evt) {
    evt.target.closest('.element').remove();
}

// like button
function likeCard(event) {
    event.target.classList.toggle('element__like-button_active');
}

// open popup with picture
function openImagePopup(name, link) {
    openPopup(popupShowImage);
    popupCardPicture.src = link;
    popupCardPicture.alt = name;
    popupCardTitle.textContent = name;
}


editPopupButton.addEventListener('click', openEditPopup);
closeProfilePopupButton.addEventListener('click', () => closePopup(editProfilePopup));
closeAddCardPopupButton.addEventListener('click', () => closePopup(addCardPopup));
closePopupShowImageButton.addEventListener('click', () => closePopup(popupShowImage));
profilePopupForm.addEventListener('submit', submitProfileForm);
addCardPopupButton.addEventListener('click', openAddCardPopup);
saveCardForm.addEventListener('submit', submitAddCardForm);

//initial cards
initialCards.forEach((card) => {
    const newCard = createNewCard(card);
    renderCard(newCard);
});