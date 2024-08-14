import { obtenerAsignaciones } from "../data/Storage.js";
import { header } from "./header/Header.js";
import { LayoutTareas } from "./layoutTareas/LayoutTareas.js";
import { LayoutTareasVacio } from "./layoutTareas/LayoutTareas.js";

const header_dom = document.getElementById('header');
header_dom.appendChild(header());

// CARGAR TAREAS
const section_vista_app = document.getElementById('vista-app');
if (obtenerAsignaciones() == ""){
    section_vista_app.appendChild(LayoutTareasVacio());
}else {
    section_vista_app.appendChild(LayoutTareas(obtenerAsignaciones()));
}



