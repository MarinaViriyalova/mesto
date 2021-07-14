import openPopup from "./index.js";
import { popupShowImage, popupCardPicture, popupCardTitle } from "./constants.js"

// class card 
class Card {
    constructor(data, cardTemplateSelector) {
        this._cardName = data.name;
        this._cardImageLink = data.link;
        this._cardImageAlt = data.alt;
        this._cardTemplateSelector = cardTemplateSelector
    }

    // card template
    _getTemplate() {
        const cardElement = document.querySelector(this._cardTemplateSelector).content.querySelector('.element').cloneNode(true)
        return cardElement;
    }

    // card content
    generateCard() {
            this._cardElement = this._getTemplate();
            this._setEventListeners();
            this._cardElement.querySelector('.element__title').innerText = this._cardName;
            const cardImage = this._cardElement.querySelector('.element__image');
            cardImage.src = this._cardImageLink;
            cardImage.alt = this._cardImageAlt;
            return this._cardElement;
        }
        // linsteners install
    _setEventListeners() {
        this._cardElement.querySelector('.element__delete-button').addEventListener('click', () => this._deleteCard());
        this._cardElement.querySelector('.element__like-button').addEventListener('click', () => this._handleLikeCard());
        this._cardElement.querySelector('.element__image').addEventListener('click', () => this._openImagePopup());
    }

    // like button function
    _handleLikeCard() {
        this._cardElement.querySelector('.element__like-button').classList.toggle('element__like-button_active');
    }

    // delete card function
    _deleteCard() {
        this._cardElement.remove();
    }

    // open popup with pic
    _openImagePopup() {
        popupCardPicture.src = this._cardImageLink;
        popupCardPicture.alt = this._cardName;
        popupCardTitle.textContent = this._cardName;
        openPopup(popupShowImage);
    }

}

export default Card;