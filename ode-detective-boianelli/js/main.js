console.log("Hola")
const chequeoResp = (movil, pregunta) => {
  let respuesta = prompt(pregunta).toLowerCase();

  while (respuesta !== "abrir" && respuesta !== "seguir" ){
    alert ("Te quedas quieto bajo la lluvia, las gotas se sienten como pequeños cubitos de hielo tocando tu piel");
    respuesta = prompt(pregunta).toLowerCase();
  }

  if(respuesta === movil){
  alert ("¿Que pasó aquella noche? te preguntas a ti mismo sin parar")
  }
  else{
    alert ("Hay muchas preguntas y pocas respuestas, tienes que hacerlo")
  }
};

for(let i = 0; i<=2; i++){
  let pregunta;
  let movil;

  switch(i){
    case 1:
      pregunta = "Tienes una llave en la mano ¿Que haces?";
      movil = "abrir";
      chequeoResp(movil, pregunta);
    break;
    case 2:
      pregunta = "La puerta yace abierta de par en par ante ti";
      movil = "entrar";
      chequeoResp(movil,pregunta);
    break;
  }
}




