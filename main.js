const userEmail = document.querySelector('#navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu =document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

function inactiveDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function inactiveMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}



userEmail.addEventListener('click', inactiveDesktopMenu);
burguerMenu.addEventListener('click', inactiveMobileMenu);
