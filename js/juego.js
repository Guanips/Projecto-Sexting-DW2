
let contador = 0


function respuestaIncorrecta(){
    alert("Me parece que esa no es la respuesta correcta")
}

function respuestaCorrecta(){
    contador = contador + 1
    console.log(contador)
    const btnCorrecto = document.getElementById(`btn1`)
    const btnIncorrecto1 = document.getElementById(`btn2`)
    const btnIncorrecto2 = document.getElementById(`btn3`)
    const btnIncorrecto3 = document.getElementById(`btn4`)
    const areaJuego = document.getElementById("areaJuego")
    if (contador == 1) {
        const nuevaPregunta = document.createElement("div")
        nuevaPregunta.setAttribute("class", "respuestas")
        nuevaPregunta.innerHTML = `<p class='pregunta'>${pregunta2.titulo}</p><div class='respuestas'><div class='botonesTop'><button class='botonRespuesta' id='btn1'type='button' onclick='respuestaIncorrecta()'>${pregunta2.respuesta1}</button><button class='botonRespuesta' id='btn2'type='button' onclick='respuestaIncorrecta()'>${pregunta2.respuesta2}</button></div><div class='botonesBottom'><button class='botonRespuesta'  id='btn3'type='button' onclick='respuestaCorrecta()'>${pregunta2.respuesta3}</button><button class='botonRespuesta'  id='btn4'type='button'onclick='respuestaIncorrecta()'>${pregunta2.respuesta4}</button></div></div>`
    
        btnCorrecto.style.backgroundColor = 'green'
        btnIncorrecto1.style.backgroundColor = 'red'
        btnIncorrecto2.style.backgroundColor = 'red'
        btnIncorrecto3.style.backgroundColor = 'red'
    
        areaJuego.appendChild(nuevaPregunta)
    } else if (contador == 2){

    } else if (contador == 3){

    } else if (contador == 4){

    } else if (contador == 5) {

    }

}

