// login.js

function login() {
    // Obtener los valores de los campos de usuario y contraseña
    const usuario = document.getElementById('exampleInputEmail1').value;
    const contrasena = document.getElementById('exampleInputPassword1').value;

    // Simulación de verificación (esto se haría normalmente en el servidor)
    if (usuario === 'usuario@example.com' && contrasena === '1234') {
        // Si el usuario y la contraseña son correctos, redirigir a otra página
        window.location.href = "agenda.html";
    } else {
        // Si los datos son incorrectos, mostrar un mensaje de error
        alert('Usuario o contraseña incorrectos');
}
}