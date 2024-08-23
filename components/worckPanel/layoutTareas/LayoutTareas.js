function encabezado(){
    const div_campos = document.createElement('div');
    div_campos.className = "campos";
    div_campos.innerHTML = '<p>Nombre de la tarea</p> <p>Asignacido</p> <p>Entrega</p> <p>Estado</p>';
    
    return div_campos;
}

function LayoutTareas(dataTareas) {

    const div = document.createElement('div');
    div.className = 'tareas-container';
    div.appendChild(encabezado());
    
    let tareas = dataTareas;

    tareas.forEach((tarea, index) => {
        const tareaDiv = document.createElement('div');
        tareaDiv.classList.add('tarea-item');

        const descripcionP = document.createElement('p');
        descripcionP.textContent = `${index+1} ${tarea.descripcion}`;
        tareaDiv.appendChild(descripcionP);

        const personasP = document.createElement('p');
        personasP.textContent = `${tarea.personasAsignadas}`;
        tareaDiv.appendChild(personasP);

        const fechaP = document.createElement('p');
        fechaP.textContent = `${tarea.fechaLimite}`;
        tareaDiv.appendChild(fechaP);

        const estadoP = document.createElement('p');
        estadoP.textContent = `${tarea.estado}`;
        estadoP.className = `estado ${colorEstado(tarea.estado)}`;
        tareaDiv.appendChild(estadoP);

        div.appendChild(tareaDiv);
    });

    
    return div;
}

function colorEstado(estaoInicial){

    if (estaoInicial == "Sin asignar"){
        return estaoInicial;
    }else if(estaoInicial == "Presentado"){

    }else if(estaoInicial == "Presentado con retraso"){

    }else if(estaoInicial == "En verificación"){

    }else {
        return "color_asignado";
    }
}


export { LayoutTareas };