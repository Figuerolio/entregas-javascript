export const levantarSospecha=(texto) =>{
    let nuevoSospechoso={
        id:Date.now().toString(36),
        data:texto,
        tachado:false
    }
    return nuevoSospechoso;
}