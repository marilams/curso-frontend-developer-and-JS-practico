const userEmail =document.querySelector('#navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');

userEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
})