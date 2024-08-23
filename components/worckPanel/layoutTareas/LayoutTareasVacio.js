import { nuevaTarea } from "../formulario_nueva_tarea/NuevaTarea.js";

function LayoutTareasVacio(){
    let div = document.createElement('div');
    div.className = "layout-tareas-vacio";

    let mensaje = document.createElement('h2');
    mensaje.innerText = "Crea y Asigna Tareas";
    div.appendChild(mensaje);

    let btnNuevaTarea = document.createElement('div');
    btnNuevaTarea.className = "btn-nueva-tarea";
    btnNuevaTarea.innerText = "Nueva Asignación";
    btnNuevaTarea.addEventListener('click',()=>{
        document.querySelector(".layout-tareas-vacio").appendChild(nuevaTarea());
        document.getElementById('nombre-tarea').focus();
    });
    div.appendChild(btnNuevaTarea);

    return div;
}

export { LayoutTareasVacio };