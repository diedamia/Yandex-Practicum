/*function closeByOverlay(event) {
    closeModal(event.target);
}

function addOverlayListener() {
    const popup = document.querySelector('.popup_is-opened');
    popup.addEventListener('click', closeByOverlay);
}

function removeOverlayListener() {
    const popup = document.querySelector('.popup_is-opened');
    popup.removeEventListener('click', closeByOverlay);
}

function closeByEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        closeModal(openedPopup);
    }
}
*/
// Функция открытия поп-апа
function openModal(popup) {      
    popup.classList.add('popup_is-opened');
    popup.querySelector('.popup__close').addEventListener('click', () => {
        closeModal(popup);
    });

    /*const popupContent = popup.querySelector('.popup__content');

    document.addEventListener('keydown', closeByEscape);

    popup.addEventListener('click', closeByOverlay);
    popupContent.addEventListener('mouseleave', addOverlayListener);
    popupContent.addEventListener('mouseenter', removeOverlayListener);*/
};

// Функция закрытия поп-апа
function closeModal(popup) {      
    popup.classList.remove('popup_is-opened');

    /*const popupContent = popup.querySelector('.popup__content');
    popup.removeEventListener('click', closeByOverlay);
    popupContent.removeEventListener('mouseleave', addOverlayListener);
    popupContent.removeEventListener('mouseenter', removeOverlayListener);
    document.removeEventListener('keydown', closeByEscape);*/
};


export{openModal, closeModal}