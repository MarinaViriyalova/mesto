import './index.css'

import Card from "../script/components/Card.js";
import FormValidator from "../script/components/FormValidator.js";
import Section from "../script/components/Section.js";
import PopupWithImage from "../script/components/PopupWithImage.js";
import PopupWithForm from "../script/components/PopupWithForm.js";
import PopupDeleteConfirm from "../script/components/PopupDeleteConfirm.js";
import UserInfo from "../script/components/UserInfo.js";
import Api from "../script/components/Api.js"
import { editPopupButton, profileAvatar, addCardPopupButton, nameInput, jobInput, config, configApi } from "../script/utils/constants.js";

const cardSection = new Section({
        renderer: (cardItem, userId) => cardGenerator(cardItem, userId)
    },
    '.elements'
);

const api = new Api(configApi);

const profileEditFormValidator = new FormValidator(config, '.popup__form_type_edit-profile');
profileEditFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(config, '.popup__form_type_add-card');
addCardFormValidator.enableValidation();

const editProfileAvatar = new FormValidator(config, '.popup__form_type_edit-avatar');
editProfileAvatar.enableValidation();

const imagePopup = new PopupWithImage('.popup_type_pic');
imagePopup.setEventListeners();

const addCardPop = new PopupWithForm('.popup_type_add', (formData) => {
    submitAddCardForm(formData);
});
addCardPop.setEventListeners();

const editProfileAvatarPop = new PopupWithForm('.popup_type_edit-avatar', (formData) => submitProfileAvatar(formData));
editProfileAvatarPop.setEventListeners();

const editProfilePop = new PopupWithForm('.popup_type_edit', (formData) => {
    submitProfileForm(formData);
});
editProfilePop.setEventListeners();

const deleteCardConfirmPop = new PopupDeleteConfirm('.popup_type_delete', (cardId, card) => {
    deleteCardConfirmPop.setSubmitButtonMassage('Удаление...')
    api.deleteCard(cardId, card)
        .then(() => { card.deleteCard(), deleteCardConfirmPop.close() })
        .catch(err => console.log(err))
        .finally(() => { deleteCardConfirmPop.setSubmitButtonMassage('Да') })
});
deleteCardConfirmPop.setEventListeners();

const userInfo = new UserInfo('.profile__title-text', '.profile__subtitle-text', '.profile__avatar');

// create card

function createCard(cardItem, userId) {
    const card = new Card(
        cardItem, userId, '.elements__template',
        () => { imagePopup.open(cardItem.link, cardItem.name) },
        () => { deleteCardConfirmPop.open(cardItem._id, card) },
        () => {
            api.makeLike(cardItem._id)
                .then(res => { card.setLikeNumber(res.likes.length), card.handleLikeActiveStateToggle() })
                .catch(err => console.log(err))
        },
        () => {
            api.makeUnlike(cardItem._id)
                .then(res => {
                    if (res.likes.length === 0) {
                        card.setLikeNumber('')
                    } else { card.setLikeNumber(res.likes.length) };
                    card.handleLikeActiveStateToggle();
                })
                .catch(err => console.log(err))
        }
    );
    return card.generateCard()
}

function cardGenerator(cardItem, userId) {
    const newCard = createCard(cardItem, userId);
    cardSection.setItem(newCard);
}

function submitProfileForm(data) {
    editProfilePop.setSubmitButtonMassage('Сохранение...')
    api.editUserInfo(data)
        .then(res => {
            const data = {
                userName: res.name,
                userJob: res.about,
            };
            userInfo.setUserInfo(data)
            editProfilePop.close()
        })
        .catch(err => console.log(err))
        .finally(() => { editProfilePop.setSubmitButtonMassage('Сохранить') })
}

function submitProfileAvatar(data) {
    editProfileAvatarPop.setSubmitButtonMassage('Сохранение...')
    api.editUserAvatar(data)
        .then(res => {
            const data = {
                userAvatar: res.avatar,
            };
            userInfo.setUserAvatar(data)
            editProfileAvatarPop.close()
        })
        .catch(err => console.log(err))
        .finally(() => { editProfileAvatarPop.setSubmitButtonMassage('Сохранить') })
}

function submitAddCardForm(data) {
    addCardPop.setSubmitButtonMassage('Создание...')
    api.postCard(data)
        .then(res => {
            cardGenerator(res, res.owner._id)
            addCardPop.close()
        })
        .catch(err => console.log(err))
        .finally(() => { addCardPop.setSubmitButtonMassage('Создать'), addCardFormValidator.resetValidation() })
}

// listeners 

editPopupButton.addEventListener('click', () => {
    const userInfoData = userInfo.getUserInfo();
    nameInput.value = userInfoData.userName;
    jobInput.value = userInfoData.userJob;
    profileEditFormValidator.resetValidation()
    editProfilePop.open()
});

addCardPopupButton.addEventListener('click', () => {
    addCardFormValidator.resetValidation();
    addCardPop.open()
});


profileAvatar.addEventListener('click', () => {
    editProfileAvatar.resetValidation();
    editProfileAvatarPop.open()
});

// promise

const promises = [api.getUserInfo(), api.getInitialCards()];

Promise.all(promises)
    .then(res => {
        const data = {
            userName: res[0].name,
            userJob: res[0].about,
            userAvatar: res[0].avatar
        };
        userInfo.setUserInfo(data);
        userInfo.setUserAvatar(data);
        cardSection.renderItems(res[1].reverse(), res[0]._id)
    })
    .catch(err => console.log(err))