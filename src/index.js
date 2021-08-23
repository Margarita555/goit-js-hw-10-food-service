import menu from './js/menu.json';
import menuCardTemplate from '../src/templates/menu-card.hbs';

function createMenuCardsMarkup(menu) {
    return menu.map(menuCardTemplate).join('');
}

const menuContainer = document.querySelector('.js-menu');
const cardMarkup = createMenuCardsMarkup(menu);
menuContainer.insertAdjacentHTML('beforeend', cardMarkup);
const body = document.querySelector('body')
// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

const themeSwitch = document.querySelector('.theme-switch__toggle');
themeSwitch.addEventListener('change', changeTheme);
function changeTheme() {
    if(body.classList.contains('light-theme')){
        body.classList.replace('light-theme', 'dark-theme')
       return;
    } if (body.classList.contains('dark-theme')) {
        body.classList.replace('dark-theme','light-theme')
        return; 
    }
}

// Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.

// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.
// Для удобства хранения списка тем используй такое перечисление.

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };
// Шаблонизация
// Используя шаблонизатор Handlebars создай шаблон одного элемента меню. После чего, используя шаблон, создай разметку всего меню по данным из menu.json и добавь в DOM в ul.js-menu.

// Для иконок используется библиотека Material Icons, линк на веб-фонт уже есть в исходном HTML.