let progreso = 0;
const longitudBarra = 240;
let dataDb = [];
let contadorPreguntas = 0;
const respuestasTotales = document.getElementById('respuestasTotales');
const pregunta = document.getElementById('pregunta_aleatorio');

const respuesta1 = document.querySelector('.respuesta1');
const respuesta2 = document.querySelector('.respuesta2');
const respuesta3 = document.querySelector('.respuesta3');

const items = document.getElementById('respuestasTotales');
const templateC = document.getElementById('template-card').content;
const templateC1 = document.getElementById('template-card1').content;

const fragment = document.createDocumentFragment()


const verificarRespuesta = (evento) => {
    // console.log(evento);
    const respuestaCorrecta = dataDb[contadorPreguntas].respuesta_correcta;
        if(dataDb[contadorPreguntas].tipo_pregunta == "seleccion"){
        if (evento.target.innerText === respuestaCorrecta) {
            contadorPreguntas = contadorPreguntas + 1;
            aumentarProgreso();
            cargaRespuestas();
        }else{
            console.log("error en seleccion")
        }
        }else if(dataDb[contadorPreguntas].tipo_pregunta == "imagen"){
            if (evento.target.src === respuestaCorrecta) {
                contadorPreguntas = contadorPreguntas + 1;
                aumentarProgreso();
                cargaRespuestas();
            }else{
                console.log("error en imagen")
            }
        }
}



respuesta1.addEventListener('click', verificarRespuesta);
respuesta2.addEventListener('click', verificarRespuesta);
respuesta3.addEventListener('click', verificarRespuesta);


//damos evento a la imagenes
/*
imagen1.addEventListener('click', verificarRespuesta);
imagen2.addEventListener('click', verificarRespuesta);
imagen3.addEventListener('click', verificarRespuesta);
imagen4.addEventListener('click', verificarRespuesta);
*/
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
    if(dataDb[contadorPreguntas].tipo_pregunta == "seleccion"){
        pregunta.innerText = dataDb[contadorPreguntas].pregunta;
    
        respuesta1.innerText = dataDb[contadorPreguntas].respuestas[0];
        respuesta2.innerText = dataDb[contadorPreguntas].respuestas[1];
        respuesta3.innerText = dataDb[contadorPreguntas].respuestas[2];

   

    }else if(dataDb[contadorPreguntas].tipo_pregunta == "imagen"){
    
    pregunta.innerText = dataDb[contadorPreguntas].pregunta;
      
    dataDb[contadorPreguntas].respuestas.forEach(element => {
    
        templateC.querySelector("img").setAttribute("src", element)
        templateC.querySelector("img").setAttribute("class", "imagencl")
        const clone = templateC.cloneNode(true)
        
        fragment.appendChild(clone)
    });
    items.appendChild(fragment)

    const pruebas1 = document.querySelectorAll(".imagencl")
    pruebas1.forEach(element =>{
     
        element.addEventListener('click', verificarRespuesta)

    })
/*
    respuesta1.innerHTML = "<img src='"+dataDb[contadorPreguntas].respuestas[0]+"'>";
    respuesta2.innerHTML = "<img src='"+dataDb[contadorPreguntas].respuestas[1]+"'>";
    respuesta3.innerHTML = "<img src='"+dataDb[contadorPreguntas].respuestas[2]+"'>";

 
*/
    }
    
  
    }


  
    // console.log(dataDb[contadorPreguntas]);


    //cargar imagenes
    // if(dataDb.tipo_pregunta===imagen){
    //     respuestasTotales.innerHTML=''
    // }
    // contenedor_prefuntas.innerHTML ='';
    // pregunta.innerText = dataDb[contadorPreguntas].pregunta;
   
 



    // imagen1.innerText = dataDb[contadorPreguntas].respuestas[0];
    // imagen2.innerText = dataDb[contadorPreguntas].respuestas[1];
    // imagen4.innerText = dataDb[contadorPreguntas].respuestas[2];
    // imagen4.innerText = dataDb[contadorPreguntas].respuestas[3];




//cambio el tipo de filtro , por categoria

fetch('../data/bdPreguntas.json')
    .then(response => response.json())
    .then(data => {
        dataDb = data.filter((pregunta) => pregunta.categoria === 'html');
        //aca cargamos el random
        cargaRespuestas();
        console.log(dataDB);
    })
    .catch(error => console.log(error));