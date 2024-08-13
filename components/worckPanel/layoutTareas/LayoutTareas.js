function LayoutTareas(tareas) {
    const div = document.createElement('div');
    div.classList.add('tareas-container');

    // Crear un elemento para cada tarea
    tareas.forEach(tarea => {
        const tareaDiv = document.createElement('div');
        tareaDiv.classList.add('tarea-item');

        const numeroP = document.createElement('p');
        numeroP.textContent = `${tarea.numero}`;
        tareaDiv.appendChild(numeroP);

        const descripcionP = document.createElement('p');
        descripcionP.textContent = `Descripción: ${tarea.descripcion}`;
        tareaDiv.appendChild(descripcionP);

        const personasP = document.createElement('p');
        personasP.textContent = `${tarea.personasAsignadas.join(', ')}`;
        tareaDiv.appendChild(personasP);

        const fechaP = document.createElement('p');
        fechaP.textContent = `${tarea.fechaLimite}`;
        tareaDiv.appendChild(fechaP);

        const estadoP = document.createElement('p');
        estadoP.className = "estado";
        estadoP.textContent = `${tarea.estado}`;
        tareaDiv.appendChild(estadoP);

        div.appendChild(tareaDiv);
    });

    return div;
}

export { LayoutTareas };