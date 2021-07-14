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

const cards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        alt: 'Архыз'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
        alt: 'Челябинская область'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
        alt: 'Иваново'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
        alt: 'Камчатка'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
        alt: 'Холмогорский район'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
        alt: 'Байкал'
    }
];

const config = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    invalidInputClass: 'popup__input_state_invalid'
}

export {
    editPopupButton,
    addCardPopupButton,
    popups,
    editProfilePopup,
    closeProfilePopupButton,
    addCardPopup,
    closeAddCardPopupButton,
    popupShowImage,
    closePopupShowImageButton,
    popupCardPicture,
    popupCardTitle,
    profilePopupForm,
    saveCardForm,
    nameInput,
    jobInput,
    profileName,
    profileJob,
    closePopupButtons,
    itemTemplate,
    picNameInput,
    linkInput,
    cardsList,
    cards,
    config
}