////// Segunda preentrega //////

const jugador ={
    nombre: prompt("Como te llamas?"),
    animalfav:prompt("Cual es tu animal favorito?")
  }
  console.log(jugador);
  alert(`Eres ${jugador.nombre} y tu dever es el de descifrar los misterios que rodean el asesinato de Camille `)
  //inventario//
  let inventario =[
    {objeto:"Llave", peso:"10g", valor:"$0"} ,
    {objeto:"Placa de Policia", peso:"40g", valor:"$100" } ,
    {objeto:"Paquete de Cigarros", peso:"200g", valor:"$20"},
  ]
  console.log(inventario);
  //agregar objetos al inventario//
  let adquirirObj = prompt("Hay un paquete a tus pies").toLocaleLowerCase();
    if(adquirirObj == "recoger"){
      inventario.unshift({objeto:"Paquete", peso:"20g", valor:"???"});
    }
  console.log(inventario);
  
  //////////////////////////
  let activo = true;
  let sospechosos = [];
  
  class Sospechoso {
    constructor() {
      this.nombre = prompt("Nombre del Sospechoso");
      this.motivo = prompt("Posible motivo");
      this.nota = prompt("Nota extra");
    }
  }
  
  while (activo) {
    let opcion = parseInt(
      prompt(
        `
          Abres tu libreta que quieres hacer??
          1 - Agregar Nombre,motivo y notas extras del sospechoso
          2 - Tachar sospechoso
          3 - Repasar sospechosos
          4 - Salir
          `
      )
    );
  
    switch (opcion) {
      case 1:
        sospechosos.push(new Sospechoso());
        break;
      case 2:
        let datoUsuario = prompt("Sospechoso a tachar");
        let nombresDsospechosos = []; 
        for (let sospechoso of sospechosos) {
          nombresDsospechosos.push(sospechoso.nombre);
        }
  
        let indice = nombresDsospechosos.indexOf(datoUsuario);
        if (indice !== -1) {
          sospechosos.splice(indice, 1);
        } else {
          alert(`No hay ningun/a${datoUsuario}`);
        }
        break;
      case 3:
        for (let sospechoso of sospechosos) {
          alert(`
              Nombre: ${sospechoso.nombre}
              Motivo: ${sospechoso.motivo}
              Nota: ${sospechoso.nota}
              `);
        }
        break;
      case 4:
        activo = false;
        break;
      default:
        alert("Ingrese una opción válida");
        break;
    }
  }