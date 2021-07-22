import arkhyz from '../../images/arkhyz.jpg';
import chelyabinsk from '../../images/chelyabinsk-oblast.jpg';
import ivanovo from '../../images/ivanovo.jpg';
import kamchatka from '../../images/kamchatka.jpg';
import kholmogorsky from '../../images/kholmogorsky-rayon.jpg';
import baikal from '../../images/baikal.jpg';

// choose profile edit button
const editPopupButton = document.querySelector('.profile__edit-button');
// choose add card button
const addCardPopupButton = document.querySelector('.profile__add-button');
// find name input
const nameInput = document.querySelector('.popup__input_text_name');
// find job input
const jobInput = document.querySelector('.popup__input_text_work');

const cards = [{
        name: 'Архыз',
        link: arkhyz,
        alt: 'Архыз'
    },
    {
        name: 'Челябинская область',
        link: chelyabinsk,
        alt: 'Челябинская область'
    },
    {
        name: 'Иваново',
        link: ivanovo,
        alt: 'Иваново'
    },
    {
        name: 'Камчатка',
        link: kamchatka,
        alt: 'Камчатка'
    },
    {
        name: 'Холмогорский район',
        link: kholmogorsky,
        alt: 'Холмогорский район'
    },
    {
        name: 'Байкал',
        link: baikal,
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
    nameInput,
    jobInput,
    cards,
    config
}