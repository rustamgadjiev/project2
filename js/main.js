let menuBtn = document.querySelector('.header__menu-btn'),
aboutSection = document.querySelector('.history__content'),
mainSection = document.querySelector('.header__content'),
menuSection = document.querySelector('.restaurantMenu'),
reservationSection = document.querySelector('.advertising'),
main = document.querySelector('.nav_main'),
menu = document.querySelector('.nav_menu'),
about = document.querySelector('.nav_about'),
reservation = document.querySelector('.nav_reservation'),
cursor = document.querySelector('.cursor'),
headerMenuMobile = document.querySelector('.header__menu-mobile');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    headerMenuMobile.classList.toggle('active');
});
about.addEventListener('click', function() {
    aboutSection.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    });
    menuBtn.classList.remove('active');
    headerMenuMobile.classList.remove('active');
});
main.addEventListener('click', function() {
    mainSection.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    });
    menuBtn.classList.remove('active');
    headerMenuMobile.classList.remove('active');
});
menu.addEventListener('click', function() {
    menuSection.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
    menuBtn.classList.remove('active');
    headerMenuMobile.classList.remove('active');
});
reservation.addEventListener('click', function() {
    reservationSection.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    });
    menuBtn.classList.remove('active');
    headerMenuMobile.classList.remove('active');
});