import htmlElements from "./elements/html.elements";
import manager from "./managers/manager";

export const app = () =>{

    manager.mostrarProductos(manager.products);

    htmlElements.filtroProductos.onchange = () =>{
        console.log(htmlElements.filtroProductos.value);
        manager.filtrarProductos(htmlElements.filtroProductos.value);
    }
}