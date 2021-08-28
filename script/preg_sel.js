let progreso = 0;
const longitudBarra = 240;
let dataDb = [];
let contadorPreguntas = 0;
const respuestasTotales = document.getElementById('respuestasTotales')
const pregunta = document.getElementById('pregunta_aleatorio')
const respuesta1 = document.querySelector('.respuesta1');
const respuesta2 = document.querySelector('.respuesta2');
const respuesta3 = document.querySelector('.respuesta3');

const verificarRespuesta = (evento) => {
    console.log(evento);
    const respuestaCorrecta = dataDb[contadorPreguntas].respuesta_correcta;
    if (evento.target.innerText === respuestaCorrecta) {
        contadorPreguntas = contadorPreguntas + 1;
        aumentarProgreso();
        cargaRespuestas();
    }
}


respuesta1.addEventListener('click', verificarRespuesta);
respuesta2.addEventListener('click', verificarRespuesta);
respuesta3.addEventListener('click', verificarRespuesta);

const aumentarProgreso = () => {
    const avance = 240 / 6;
    if (progreso < 6) {
        progreso = progreso + 1
        // const element=  window.getComputedStyle(
        //     document.querySelector('.barra_porcentaje'), ':after'
        // )

        const element = document.querySelector('.barra_porcentaje_interna')

        element.style.width = `${avance*progreso}px`

    }


}
const cargaRespuestas = () => {
    console.log(contadorPreguntas, dataDb);
    pregunta.innerText = dataDb[contadorPreguntas].pregunta;
  
    respuesta1.innerText= dataDb[contadorPreguntas].respuestas[0];
    respuesta2.innerText= dataDb[contadorPreguntas].respuestas[1];
    respuesta3.innerText= dataDb[contadorPreguntas].respuestas[2];
    
    console.log(dataDb[contadorPreguntas]);




}



fetch('../data/bdPreguntas.json')
    .then(response => response.json())
    .then(data => {
        dataDb = data.filter((pregunta) => pregunta.tipo_pregunta === 'seleccion');
        //aca cargamos el random
        cargaRespuestas();
    })
    .catch(error => console.log(error));