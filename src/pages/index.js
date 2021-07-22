import './index.css';

import Card from "../script/components/Card.js";
import FormValidator from "../script/components/FormValidator.js";
import Section from "../script/components/Section.js";
import PopupWithImage from "../script/components/PopupWithImage.js";
import PopupWithForm from "../script/components/PopupWithForm.js";
import UserInfo from "../script/components/UserInfo.js"
import { editPopupButton, addCardPopupButton, nameInput, jobInput, cards, config } from "../script/utils/constants.js";

// cards section 
const cardSection = new Section({
        data: cards,
        renderer: (cardItem) => cardGenerator(cardItem)
    },
    '.elements'
);

cardSection.renderItems();

// profile validation
const profileEditFormValidator = new FormValidator(config, '.popup__form_type_edit-profile')
profileEditFormValidator.enableValidation()

// add card validation
const addCardFormValidator = new FormValidator(config, '.popup__form_type_add-card')
addCardFormValidator.enableValidation()

// popup with image
const imagePopup = new PopupWithImage('.popup_type_pic');
imagePopup.setEventListeners();

// popup add card
const addCardPop = new PopupWithForm('.popup_type_add', (formData) => {
    submitAddCardForm(formData);
});
addCardPop.setEventListeners();

// popup with edit profile
const editProfilePop = new PopupWithForm('.popup_type_edit', (formData) => {
    submitProfileForm(formData);
});
editProfilePop.setEventListeners();

// user info
const userInfo = new UserInfo('.profile__title-text', '.profile__subtitle-text');

//create card function
function createCard(cardItem) {
    const card = new Card(cardItem, '.elements__template', () => { imagePopup.open(cardItem.link, cardItem.name) });
    return card.generateCard()
}

// add card function
function cardGenerator(cardItem) {
    const newCard = createCard(cardItem);
    cardSection.setItem(newCard);
}

// Save profile function
function submitProfileForm(data) {
    userInfo.setUserInfo(data);
    editProfilePop.close();
}

// Save card function
function submitAddCardForm(data) {
    const item = {
        name: data.picName,
        link: data.picLink,
        alt: data.picName
    }
    cardGenerator(item);
    addCardPop.close();
    addCardFormValidator.resetValidation();
}

// edit profile button listener
editPopupButton.addEventListener('click', () => {
    const userInfoData = userInfo.getUserInfo();
    nameInput.value = userInfoData.userName;
    jobInput.value = userInfoData.userJob;
    profileEditFormValidator.resetValidation()
    editProfilePop.open()
});

// add card button listener
addCardPopupButton.addEventListener('click', () => {
    addCardFormValidator.resetValidation();
    addCardPop.open()
});