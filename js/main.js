const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const mail = 'matiasgutierrez23@gmail.com';

form.addEventListener("submit", e => {
    e.preventDefault()

    window.location = 'mailto: ' + mail + '?subject=' + asunto.value + '&body=' + mensaje.value;

    asunto.value = '';
    mensaje.value = '';
})