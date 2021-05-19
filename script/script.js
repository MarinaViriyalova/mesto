let blockPopup = document.querySelector('.popup');
let openBlockPopup = document.querySelector('.profile__edit-button');
let closeBlockPopup = blockPopup.querySelector('.popup__close');
let nameFromPage = document.querySelector('.profile__title-text');
let jobFromPage = document.querySelector('.profile__subtitle-text');
let nameFromForm = document.querySelector('.popup__input_name');
let jobFromForm = document.querySelector('.popup__input_work');

function togglePopup() {
    blockPopup.classList.toggle('popup_opened');
    nameFromForm.value = nameFromPage.textContent;
    jobFromForm.value = jobFromPage.textContent;
}

function closePopup() {
    blockPopup.classList.remove('popup_opened');
}

openBlockPopup.addEventListener('click', togglePopup);
closeBlockPopup.addEventListener('click', togglePopup);

function savePopup(event) {
    event.preventDefault();
    nameFromPage.textContent = nameFromForm.value;
    jobFromPage.textContent = jobFromForm.value;
    closePopup();
}
blockPopup.addEventListener('submit', savePopup);