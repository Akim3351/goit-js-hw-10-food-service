import menu from '../menu.json';
import menuCardTmpl from '../templates/menu-card.hbs';

const cardsContainer = document.querySelector('.js-menu')
const cardsMarkup = makeCardsMarkup(menu);
cardsContainer.insertAdjacentHTML('beforeend',cardsMarkup);

function makeCardsMarkup(menu) {
    return menuCardTmpl(menu)
};
