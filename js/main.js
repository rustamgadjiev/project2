let menuBtn = document.querySelector('.header__menu-btn'),
    headerMenuMobile = document.querySelector('.header__menu-mobile');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    headerMenuMobile.classList.toggle('active');
});