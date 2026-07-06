const btnMenu = document.querySelector('.btn-menu');
const iconMenu = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu');
const ancorContent = document.querySelector('.ancor-content');
const imgShowMenu = document.querySelector('.show-menu');

btnMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        iconMenu.src = "./images/icon-close.svg";
        imgShowMenu.classList.toggle('show-menu');
    } else {
        iconMenu.src = "./images/icon-hamburger.svg";
        imgShowMenu.classList.toggle('show-menu');
    }
});

window.addEventListener('click', (e) => {
    if (
        menu.classList.contains('active') &&
        !menu.contains(e.target) &&
        !(btnMenu && btnMenu.contains(e.target))
    ) {
        menu.classList.remove('active');
        iconMenu.src = "./images/icon-hamburger.svg";
        imgShowMenu.classList.toggle('show-menu');
    }
});