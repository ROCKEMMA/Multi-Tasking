import { header } from "./header/Header.js";
import { tareas } from "../data/Tareas.js";
import { LayoutTareas } from "./layoutTareas/LayoutTareas.js";

const header_dom = document.getElementById('header');
header_dom.appendChild(header());

const section_vista_app = document.getElementById('vista-app');
section_vista_app.appendChild(LayoutTareas(tareas));