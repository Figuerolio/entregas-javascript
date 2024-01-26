import htmlElements from "../elements/html.elements";
import { crearBoton } from "../elements/boton.element";

let products =[]
let carrito = JSON.parse(localStorage.getItem("carrito")) || []


////Fetch y Visualizacion Productos/////
    const containerCards = document.createElement("div");
    containerCards.className = "row";

    const mostrarProductos = async (products) => {
        const resp = await fetch("/data/productos.json");
        const data = await resp.json();
        products = [...data];
        console.log(products);
        products.forEach((product) => {
            let btn = crearBoton("Comprar","btn","col-xs" );
            let btnCont = document.createElement("div");

            const card = document.createElement("div");
            card.className = "col mx-5";
            card.innerHTML = `
            <img src="${product.imagen}" alt="">
            <h4>${product.nombre}</h4>
            <h5>$${product.precio}</h5>`
            containerCards.append(card);
            containerProductos.append(containerCards);
            btnCont.append(btn);
            card.append(btnCont)

        })
        
    }
    mostrarProductos();

    
//////Filtro Productos////////
    const filtrarProductos = (estadoProducto) => {
        if (estadoProducto === "noruegas") {

            let productosFiltrados = products.filter((product) => product.noruego === true);
            mostrarProductos(productosFiltrados);
        
        } else if (estadoProducto === "orientales") {
            let productosFiltrados = products.filter((product) => product.noruego === false);
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