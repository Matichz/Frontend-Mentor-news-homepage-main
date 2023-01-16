const boton_open_mobile = document.getElementById('btn-open');
const boton_close_mobile = document.getElementById('btn-close');
const navbar_mobile = document.getElementById('navegation-mobile');

boton_open_mobile.addEventListener('click', () => {
    navbar_mobile.classList.remove ('navbar-mobile');
});

boton_close_mobile.addEventListener('click', () => {
    navbar_mobile.classList.add ('navbar-mobile');
});
