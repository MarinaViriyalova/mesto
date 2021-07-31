class Card {
    constructor(data, userId, cardTemplateSelector, handleCardClick, handleCardDelete, handleCardLike, handleCardUnlike) {
        this._cardName = data.name;
        this._cardImageLink = data.link;
        this._cardImageAlt = data.name;
        this._cardOwnerId = data.owner._id;
        this._cardId = data._id;
        this._userId = userId;
        this._likesArray = data.likes;
        this._cardTemplateSelector = cardTemplateSelector;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._handleCardLike = handleCardLike;
        this._handleCardUnlike = handleCardUnlike;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardTemplateSelector).content.querySelector('.element').cloneNode(true)
        return cardElement;
    }

    generateCard() {
        this._cardElement = this._getTemplate();
        this._cardElement.querySelector('.element__title').innerText = this._cardName;
        this._cardImage = this._cardElement.querySelector('.element__image');
        this._likeCard = this._cardElement.querySelector('.element__like-button');
        this._likesNumber = this._cardElement.querySelector('.element__likes-number');
        this._hasMyLike = this._likesArray.some(item => item._id === this._userId);
        if (this._hasMyLike) {
            this._likeCard.classList.add('element__like-button_active');
        };
        if (this._likesArray.length === 0) {
            this.setLikeNumber('')
        } else { this.setLikeNumber(this._likesArray.length) }
        this._deleteCardButton = this._cardElement.querySelector('.element__delete-button');
        if (!(this._userId === this._cardOwnerId)) {
            this._deleteCardButton.remove();
        };
        this._setEventListeners();
        this._cardImage.src = this._cardImageLink;
        this._cardImage.alt = this._cardImageAlt;
        return this._cardElement;
    }

    setLikeNumber(likeNumber) {
        this._likesNumber.textContent = likeNumber;
    }

    _setEventListeners() {
        if (this._userId === this._cardOwnerId) {
            this._deleteCardButton.addEventListener('click', this._handleCardDelete);
        };
        this._likeCard.addEventListener('click', () => this._handleLikeCard());
        this._cardImage.addEventListener('click', this._handleCardClick);
    }

    _handleLikeCard() {
        if (this._likeCard.classList.contains('element__like-button_active')) {
            this._handleCardUnlike()
        } else {
            this._handleCardLike()
        };
    }

    handleLikeActiveStateToggle() {
        this._likeCard.classList.toggle('element__like-button_active');
    }

    deleteCard() {
        this._cardElement.remove();
    }

}

export default Card;