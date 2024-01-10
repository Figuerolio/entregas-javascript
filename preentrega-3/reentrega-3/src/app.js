import htmlElements from "./elements/html.elements";
import perfilManager from "./managers/manager";
import notasManager from "./managers/manager";


export const app = () => {
    console.log("Ejecutando aplicación");
    htmlElements.formNotas.onsubmit = (event) => {
        event.preventDefault();
        notasManager.agregarSospechoso();
    }
    perfilManager.verPerfil(perfilManager.sospechosos);

}