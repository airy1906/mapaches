// Lista para almacenar las citas registradas
let citas = [];

// Esperamos a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formCitas');
    const tablaCitas = document.getElementById('tablaCitas');
    
    // Manejamos el evento 'submit' del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Obtenemos los valores de los campos
        const nombreCliente = document.getElementById('nombreCliente').value;
        const telefonoCliente = document.getElementById('telefonoCliente').value;
        const descripcionServicio = document.getElementById('descripcionServicio').value;
        const costoServicio = document.getElementById('costoServicio').value;
        const fechaCita = document.getElementById('fechaCita').value;
        const horaCita = document.getElementById('horaCita').value;

        // Validamos que todos los campos estén llenos
        if (nombreCliente === '' || telefonoCliente === '' || descripcionServicio === '' || costoServicio === '' || fechaCita === '' || horaCita === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        // Creamos un objeto con los datos de la cita
        const nuevaCita = {
            nombreCliente,
            telefonoCliente,
            descripcionServicio,
            costoServicio,
            fechaCita,
            horaCita
        };

        // Añadimos la nueva cita al array de citas
        citas.push(nuevaCita);

        // Mostramos la nueva cita en la tabla
        actualizarTabla();

        // Limpiamos el formulario
        form.reset();
    });

    // Función para actualizar la tabla con las citas registradas
    function actualizarTabla() {
        // Limpiamos el contenido actual de la tabla
        tablaCitas.innerHTML = '';

        // Recorremos todas las citas y las mostramos en la tabla
        citas.forEach((cita, index) => {
            const fila = document.createElement('tr');

            fila.innerHTML = `
                <td>${cita.nombreCliente}</td>
                <td>${cita.telefonoCliente}</td>
                <td>${cita.descripcionServicio}</td>
                <td>$${cita.costoServicio}</td>
                <td>${cita.fechaCita}</td>
                <td>${cita.horaCita}</td>
            `;

            tablaCitas.appendChild(fila);
        });
    }
});

