import htmlElements from "./elements/html.elements";
import listadoManager from "../src/managers/listado.manager";



export const libreta = () => {
    console.log("Funciona");
    htmlElements.formTarea.onsubmit = (event) => {
        event.preventDefault();
        listadoManager.agregarSospechoso();
    }
}