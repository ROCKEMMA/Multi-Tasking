function LayoutTareasVacio(){
    let div = document.createElement('div');
    div.className = "layout-tareas-vacio";

    const div_mensaje = document.createElement('div');
    div_mensaje.className = "div-mensaje";
    const mensaje = document.createElement('h2');
    mensaje.innerText = "Crea y asigna tareas";
    div_mensaje.appendChild(mensaje);

    div.appendChild(div_mensaje);

    return div;
}

export { LayoutTareasVacio };