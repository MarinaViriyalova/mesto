let blockPopup = document.querySelector('.popup');
let openBlockPopup = document.querySelector('.profile__edit-button');
let closeBlockPopup = blockPopup.querySelector('.popup__close');
let nameFromPage = document.querySelector('.profile__title-text');
let jobFromPage = document.querySelector('.profile__subtitle-text');
let nameFromForm = document.querySelector('.popup__input_text_name');
let jobFromForm = document.querySelector('.popup__input_text_work');

// открытие popup
function openPopup() {
    blockPopup.classList.add('popup_opened');
    nameFromForm.value = nameFromPage.textContent;
    jobFromForm.value = jobFromPage.textContent;
}
// закрытие popup
function closePopup() {
    blockPopup.classList.remove('popup_opened');
}
// сохранение изменений
function savePopup(event) {
    event.preventDefault();
    nameFromPage.textContent = nameFromForm.value;
    jobFromPage.textContent = jobFromForm.value;
    closePopup();
}
// слушатели 
openBlockPopup.addEventListener('click', openPopup);
closeBlockPopup.addEventListener('click', closePopup);
blockPopup.addEventListener('submit', savePopup);