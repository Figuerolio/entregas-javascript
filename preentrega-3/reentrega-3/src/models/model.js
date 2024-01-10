export const crearSospechoso = (texto) => {
    let nuevoSospechoso = {
        id: Date.now().toString(36),
        data: texto,
        realizado: false
    }

    return nuevoSospechoso;
}
