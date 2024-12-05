// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

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
    likeButton.addEventListener('click', (evt) => {
        evt.target.classList.toggle('card__like-button_is-active');
    });

    //Обработчик кнопки Корзина
    const delButton = cardElement.querySelector('.card__delete-button');
    delButton.addEventListener('click', (evt) => {
        evt.target.closest('.card').remove();
    });

    return cardElement;
}

export {createCard};