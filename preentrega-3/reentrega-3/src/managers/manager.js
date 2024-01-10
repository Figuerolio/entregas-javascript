import htmlElements from "../elements/html.elements";
import { crearSospechoso } from "../models/model";
import { crearBoton } from "../elements/button.element.js";
let  sospechosos = JSON.parse(localStorage.getItem("sospechosos")) || [];

const agregarSospechoso = () =>{
    let sospechosoNuevo = crearSospechoso(htmlElements.inputNotas.value);
    sospechosos.push(sospechosoNuevo);
    localStorage.setItem("sospechosos", JSON.stringify(sospechosos));
    console.log(sospechosos);
};

const verPerfil = (sospechosos) => {
    htmlElements.paginasNotas.innerHTML = "";
    console.log(sospechosos);

    sospechosos.forEach((perfil) => {
        let archivo = document.createElement("div");
        archivo.className = "d-flex mt-3 justify-content-between align-items-center border border-2 rounded-2 p-3";
        archivo.innerHTML = ` <p class="${perfil.tachado ? "text-decoration-line-through" : "align-self-end"}">${perfil.data}</p>`;
        let btnContenedor = document.createElement("div");
        archivo.appendChild(btnContenedor);
        let btnEliminar = crearBoton("Elimina", "btn", "btn-danger", "ms-2");
        btnEliminar.onclick = () => eliminarPerfil(perfil.id);
        btnContenedor.appendChild(btnEliminar);

        let btnTachado = crearBoton(
            `${perfil.tachado ? "Cancelar" : "Tachar"}`,
            "btn",
            `${perfil.tachado ? "btn-caution" : "btn-warning"}`,
            "ms-2"
        );

        btnTachado.onclick = () => cambiarEstadoPerfil(perfil.id);
        btnContenedor.appendChild(btnTachado);
        htmlElements.paginasNotas.appendChild(archivo);
    });
}






export default {
    sospechosos,
    agregarSospechoso,
    verPerfil
};

