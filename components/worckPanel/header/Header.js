import { nuevaTarea } from "../formulario_nueva_tarea/NuevaTarea.js";

function header(){
    const header = document.createElement('div');
    header.className = "header";
    // MENÚ
    const menu = document.createElement('div');
    menu.className = "menu";

    const boxImg = document.createElement('div');
    boxImg.className = "box-img";
    const img = document.createElement('img');
    img.src = "https://raw.githubusercontent.com/ROCKEMMA/img/ba688eb16545dd9e8de0dbabc3a2e77ce8bacedb/logo/logo.svg";
    img.alt = "";
    boxImg.appendChild(img);
    
    const h2 = document.createElement('h2');
    h2.innerText = "MultiTasking";
    menu.appendChild(boxImg);
    menu.appendChild(h2);

    // BUSCADOR
    const div_buscador = document.createElement('input');
    div_buscador.type = "text";
    div_buscador.placeholder = "Buscar tarea"
    div_buscador.className = "div-buscador";

    // BOTÓN NUEVA TAREA
    const div_nuevo_item = document.createElement('div');
    div_nuevo_item.className = "div-nuevo-item";
    div_nuevo_item.innerText = "➕";
    div_nuevo_item.addEventListener('click',()=>{
        document.getElementById('vista-app').appendChild(nuevaTarea());
            // Establecer el foco en el campo nombreTareaInput
            document.getElementById('nombre-tarea').focus();

            // Función para recargar la página
            function recargarPagina() {
                location.reload(true);
            }

            // Manejador de eventos para detectar la tecla "Esc"
            document.addEventListener('keydown', function(event) {
                // Verifica si la tecla presionada es "Esc" (código de tecla 27)
                if (event.key === 'Escape' || event.keyCode === 27) {
                    recargarPagina();
                }
            });

    });

    // Acciones para el formulario
    function clickButton() {
        div_nuevo_item.click();
    }

    document.addEventListener('keydown', (event) => {
        // Ctrl + B
        event.ctrlKey && event.key === 'b' && clickButton();
    });

    // USUARIO
    const div_perfil = document.createElement('div');
    div_perfil.className = "div-perfil";
    div_perfil.innerText = "👦🏽";

    header.appendChild(menu);
    header.appendChild(div_buscador);
    header.appendChild(div_nuevo_item);
    header.appendChild(div_perfil);
    return header;
}

export { header };