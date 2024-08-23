import { obtenerAsignaciones } from "../data/Storage.js";
import { header } from "./header/Header.js";
import { LayoutTareasVacio } from "./layoutTareas/LayoutTareasVacio.js";
import { LayoutTareas } from "./layoutTareas/LayoutTareas.js";

// [DOM]
const rootWork = document.getElementById('root-work');

const headerElement = document.createElement('header');
headerElement.id = 'header';
headerElement.appendChild(header());

const workElement = document.createElement('section');
workElement.id = 'vista-app';

const forNewElement = document.createElement('div') ;
forNewElement.id = 'for-new-element';

rootWork.appendChild(headerElement);
rootWork.appendChild(workElement);
rootWork.appendChild(forNewElement);

// -------------------------------------------------

// CARGAR TAREAS
if (obtenerAsignaciones().length === 0){
    workElement.appendChild(LayoutTareasVacio());
}else { 
    workElement.appendChild(LayoutTareas(obtenerAsignaciones()));
}