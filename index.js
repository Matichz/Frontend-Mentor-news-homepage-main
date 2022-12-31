const boton_open_mobile = document.getElementById('btn-open');
const boton_close_mobile = document.getElementById('btn-close');

boton_open_mobile.addEventListener('click', () => {
    document.querySelector('.menu-navegacion-bg').style.display = 'block';
});

boton_close_mobile.addEventListener('click', () => {
    document.querySelector('.menu-navegacion-bg').style.display = 'none';
});
