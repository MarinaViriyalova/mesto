import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupCardPicture = this._popup.querySelector('.popup__pic');
        this._popupCardTitle = this._popup.querySelector('.popup__pic-title');
    }


    open(cardLink, cardName) {
        super.open();
        this._popupCardPicture.src = cardLink;
        this._popupCardPicture.alt = cardName;
        this._popupCardTitle.textContent = cardName;
    }
}