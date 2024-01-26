import htmlElements from "../elements/html.elements.js";
import{levantarSospecha} from"../models/sospechosos.model.js";


 
let personas = JSON.parse(localStorage.getItem("sospechosos")) || [];

const cambiarSospecha = () => {

}
const eliminarSospecha = () => {
    let sospechosoNuevo = deducirSospecha(htmlElements.inputSospecha.value);
    personas.push(sospechosoNuevo);
    localStorage.setItem("sospechosos",JSON.stringify(personas));
    console.log(personas);
}


const agregarSospechoso = () =>{
    
}

export default{
    levantarSospecha,
    cambiarSospecha,
    eliminarSospecha
}