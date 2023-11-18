const boton_login = document.getElementById('boton-login');
const boton_register = document.getElementById('boton-register');

if (boton_login != null) {
    boton_login.addEventListener('click', () => {
        alert('Sesion iniciada');

    })
}

if (boton_register != null) {
    boton_register.addEventListener('click', () => {
        alert('Cuenta creada');
    })
}