class Card {
    constructor(data, cardTemplateSelector, handleCardClick) {
        this._cardName = data.name;
        this._cardImageLink = data.link;
        this._cardImageAlt = data.alt;
        this._cardTemplateSelector = cardTemplateSelector;
        this._handleCardClick = handleCardClick;
    }

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
        this._likeCard = this._cardElement.querySelector('.element__like-button');
        cardImage.src = this._cardImageLink;
        cardImage.alt = this._cardImageAlt;
        return this._cardElement;
    }

    _setEventListeners() {
            this._cardElement.querySelector('.element__delete-button').addEventListener('click', () => this._deleteCard());
            this._cardElement.querySelector('.element__like-button').addEventListener('click', () => this._handleLikeCard());
            this._cardElement.querySelector('.element__image').addEventListener('click', this._handleCardClick);
        }
        // like function
    _handleLikeCard() {
        this._likeCard.classList.toggle('element__like-button_active');
    }

    // delete card
    _deleteCard() {
        this._cardElement.remove();
    }

}

export default Card;