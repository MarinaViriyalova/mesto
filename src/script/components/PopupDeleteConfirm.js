import Popup from "./Popup.js";

export default class PopupDeleteConfirm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._form = this._popup.querySelector('.popup__form');
    }

    open(cardId, card) {
        super.open();
        this._cardItemId = cardId;
        this._card = card
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitCallback(this._cardItemId, this._card);
        });
    }

}