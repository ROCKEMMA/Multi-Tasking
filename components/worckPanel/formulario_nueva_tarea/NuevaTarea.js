import { guardarAsignaciones, obtenerAsignaciones } from "../../data/Storage.js";

function nuevaTarea() {
    const div = document.createElement('div');
    div.id = 'form-container';
    
    const form = document.createElement('form');

    // Campo tarea
    const nombreTareaLabel = document.createElement('label');
    nombreTareaLabel.setAttribute('for', 'nombre-tarea');
    nombreTareaLabel.textContent = 'Nombre de la tarea: ';
    const nombreTareaInput = document.createElement('input');
    nombreTareaInput.setAttribute('type', 'text');
    nombreTareaInput.setAttribute('id', 'nombre-tarea');
    nombreTareaInput.setAttribute('name', 'nombre-tarea');

    // Campo asignar a
    const asignadoLabel = document.createElement('label');
    asignadoLabel.setAttribute('for', 'asignado');
    asignadoLabel.textContent = 'Asignado a: ';
    const asignadoSelect = document.createElement('select');
    asignadoSelect.setAttribute('id', 'asignado');
    asignadoSelect.setAttribute('name', 'asignado');

    const opcionesAsignado = ['--------','Juan Pérez', 'María López', 'Ana Gómez'];
    opcionesAsignado.forEach(opcion => {
        const option = document.createElement('option');
        option.setAttribute('value', opcion);
        option.textContent = opcion;
        asignadoSelect.appendChild(option);
    });

    // Campo fecha
    const fechaEntregaLabel = document.createElement('label');
    fechaEntregaLabel.setAttribute('for', 'fecha-entrega');
    fechaEntregaLabel.textContent = 'Fecha de entrega: ';
    const fechaEntregaInput = document.createElement('input');
    fechaEntregaInput.setAttribute('type', 'date');
    fechaEntregaInput.setAttribute('id', 'fecha-entrega');
    fechaEntregaInput.setAttribute('name', 'fecha-entrega');


    // BOTÓN CREAR ASIGNACIÓN
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.className = "btn-nueva-tarea";
    submitButton.textContent = 'Asignar tarea';

    // Añadir todos los campos al formulario
    form.appendChild(nombreTareaLabel);
    form.appendChild(nombreTareaInput);
    form.appendChild(asignadoLabel);
    form.appendChild(asignadoSelect);
    form.appendChild(fechaEntregaLabel);
    form.appendChild(fechaEntregaInput);
    form.appendChild(submitButton);

    // Manejar el envío del formulario
    form.addEventListener('submit', (event) => {
        //event.preventDefault(); // Evita la recarga de la página

        let dato = {
            descripcion: nombreTareaInput.value,
            personasAsignadas: asignadoSelect.value,
            fechaLimite: fechaEntregaInput.value,
            estado: asignadoSelect.value === '--------' ? "Sin asignar" : "Asignado"
        };

        let dataTareas = obtenerAsignaciones();
        dataTareas.push(dato);

        guardarAsignaciones(dataTareas);

        // Opcional: Limpiar los campos del formulario después de enviar
        nombreTareaInput.value = '';
        asignadoSelect.value = '';
        fechaEntregaInput.value = '';
    });

    div.appendChild(form);

    return div;
}

export { nuevaTarea };
