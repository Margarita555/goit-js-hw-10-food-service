import menu from './js/menu.json';
import menuCardTemplate from '../src/templates/menu-card.hbs';

const menuContainer = document.querySelector('.js-menu');
const themeSwitch = document.querySelector('.theme-switch__toggle');

const cardMarkup = menuCardTemplate(menu);
 menuContainer.insertAdjacentHTML('beforeend', cardMarkup);


document.addEventListener('DOMContentLoaded', setTheme);
function setTheme() {
    let theme = localStorage.getItem('theme');
    if(theme == 'dark'){
        document.body.classList.add('dark-theme');
        themeSwitch.checked = true;
    }if(theme == 'light'){
        document.body.classList.add('light-theme');
    }
}

themeSwitch.addEventListener('change', onThemeSwitchChange);
function onThemeSwitchChange() {
    //  document.body.classList.add('dark-theme');
    if(document.body.classList.contains('light-theme')){
        document.body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark');
       return;
    } if (document.body.classList.contains('dark-theme')) {
        document.body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light');
        return; 
    }
}

// themeSwitch.addEventListener('change', onThemeSwitchChange);
// function onThemeSwitchChange() {

//     if(document.body.classList.contains('light-theme')){
//         document.body.classList.replace('light-theme', 'dark-theme');
//         localStorage.setItem('theme', 'dark');
//        return;
//     } if (document.body.classList.contains('dark-theme')) {
//         document.body.classList.replace('dark-theme', 'light-theme');
//         localStorage.setItem('theme', 'light');
//         return; 
//     }
// }

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