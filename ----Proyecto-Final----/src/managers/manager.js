import htmlElements from "../elements/html.elements";
import { crearBoton } from "../elements/boton.element";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css";

let products =[];
let carrito = JSON.parse(localStorage.getItem("carrito")) || []


////Fetch y Visualizacion Productos/////
    const containerCards = document.createElement("div");
    containerCards.className = "row";
    
    
    const obtenerProductos = async () => {
        try { 
            const resp = await fetch("/data/productos.json");
            const data = await resp.json();
            products = [...data];
        } catch(error) {
            console.log(error);
        }} 
obtenerProductos()

const mostrarProductos = async (products) => {
        Toastify({
            text: "Bienvenido",
            position: "center",
        }).showToast()
        const resp = await fetch("/data/productos.json");
        const data = await resp.json();
        products = [...data];
        products.forEach((product) => {
            let btn = crearBoton("Comprar","btn","col-xs" );
            btn.onClick = () => agregarCarrito();
            const card = document.createElement("div");
            card.className = "col";
            card.innerHTML = `
            <img src="${product.imagen}" alt="">
            <h4>${product.nombre}</h4>
            <h5>$${product.precio}</h5>
            <p>${product.desc}</p>`

            //Appends//
            containerCards.append(card);
            containerProductos.append(containerCards);
            card.append(btn);
        })
    }

    
    mostrarProductos();


//////Filtro Productos////////

    const filtrarProductos = (estadoProductos) => {
        if (estadoProductos === "noruegas") {
            let productosFiltrados = products.filter((producto) => producto.noruego === true);
            mostrarProductos(productosFiltrados);
        } else if (estadoProductos === "orientales") {
            let productosFiltrados = products.filter((producto) => producto.noruego === false);
            mostrarProductos(productosFiltrados);
        } else {
            mostrarProductos(products);
        }
    };




///////Exports///////
export default{
    products,
    mostrarProductos,
    filtrarProductos
}