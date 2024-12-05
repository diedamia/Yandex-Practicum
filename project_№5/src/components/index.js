import '../pages/index.css';
import { initialCards } from './data.js';
import { openModal, closeModal } from './modal.js';
import { createCard } from './cards.js';
import { enableValidation } from './validate.js';

// DOM узлы
const content = document.querySelector('.content');
const cardsContainer = document.querySelector('.places__list');

// Поп-апы
const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

// DOM узлы поп-апов
const popupImage = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

// Кнопки вызова поп-апов
const profileButton = document.querySelector('.profile__edit-button');
const cardButton = document.querySelector('.profile__add-button');

// Анимация поп-апов
profilePopup.classList.add('popup_is-animated');
cardPopup.classList.add('popup_is-animated');
imagePopup.classList.add('popup_is-animated');


////Поп-ап редактирования профиля////

// Пользовательские данные профиля
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// Форма профиля
const profileFormElement = profilePopup.querySelector('.popup__form');

// Поля формы профиля
const nameInput = profileFormElement.querySelector('.popup__input_type_name');
const jobInput = profileFormElement.querySelector('.popup__input_type_description');

// Открытие поп-апа редактирования профиля
profileButton.addEventListener('click', () => {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
    openModal(profilePopup);
})

// Обработчик формы
function handleProfileFormSubmit(evt) {
    evt.preventDefault(); 
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeModal(profilePopup);
}

// Прикрепление обработчика к форме
profileFormElement.addEventListener('submit', handleProfileFormSubmit); 

////Поп-ап добавления карточки///

// Форма добавления карточки
const cardFormElement = cardPopup.querySelector('.popup__content');

// Поля формы карточки
const cardNameInput = cardFormElement.querySelector('.popup__input_type_card-name');
const cardUrlInput = cardFormElement.querySelector('.popup__input_type_url');

// Открытие поп-апа добавления карточки
cardButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    cardNameInput.value = '';
    cardUrlInput.value = '';
    openModal(cardPopup);
})

// Обработчик формы
function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const newCard = createCard(cardNameInput.value, cardUrlInput.value);
    cardsContainer.prepend(newCard);
    closeModal(cardPopup);
}

// Прикрепление обработчика к форме
cardFormElement.addEventListener('submit', handleCardFormSubmit); 


//Поп-ап с картинкой
cardsContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('card__image')){
        popupImage.src = evt.target.src;
        popupImage.alt = evt.target.alt;
        popupCaption.textContent = evt.target.alt;
        openModal(imagePopup);
    }
})

// Вывод карточек на страницу
initialCards.forEach(function ({name, link}) {
    const cardData = createCard(name, link);
    cardsContainer.append(cardData);
});

enableValidation();

