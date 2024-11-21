// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
  
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

// Функция создания карточки
function createCard(placeName, placeLink){
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    
    const cardImg = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    cardImg.alt = placeName;
    cardImg.src = placeLink;
    cardTitle.textContent = placeName;

    //Обработчик кнопки Лайк
    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', (event) => {
        event.target.classList.toggle('card__like-button_is-active');
    });

    //Обработчик кнопки Корзина
    const delButton = cardElement.querySelector('.card__delete-button');
    delButton.addEventListener('click', (event) => {
        event.target.closest('.card').remove();
    });

    //Поп-ап с картинкой
    const img = cardElement.querySelector('.card__image');
    img.addEventListener('click', (event) => {
        popupImage.src = placeLink;
        popupImage.alt = placeName;
        popupCaption.textContent = placeName;
        openModal(imagePopup);
    })
    return cardElement;
};


// Вывод карточек на страницу
initialCards.forEach(function ({name, link}) {
    const cardData = createCard(name, link);
    cardsContainer.append(cardData);
});

// Функция открытия поп-апа
function openModal(popup) {      
    popup.classList.add('popup_is-opened');
    popup.querySelector('.popup__close').addEventListener('click', (event) => {
        closeModal(popup);
    });
};

// Функция закрытия поп-апа
function closeModal(popup) {      
    popup.classList.remove('popup_is-opened');
};

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
profileButton.addEventListener('click', (event) => {
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
const urlInput = cardFormElement.querySelector('.popup__input_type_url');

// Открытие поп-апа добавления карточки
cardButton.addEventListener('click', (event) => {
    openModal(cardPopup);
})

// Обработчик формы
function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const newCard = createCard(cardNameInput.value, urlInput.value);
    cardsContainer.prepend(newCard);
    closeModal(cardPopup);
}

// Прикрепление обработчика к форме
cardFormElement.addEventListener('submit', handleCardFormSubmit); 