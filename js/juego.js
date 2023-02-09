let wrong = 0
let correct = 0
let track1 = 0
let track2 = 0
let track3 = 0
let track4 = 0
let track5 = 0

function respuestaIncorrecta(){
    alert("Me parece que esa no es la respuesta correcta")
    wrong++
}

function respuestaCorrecta1(){
 
    const btn1 = document.getElementById("p1_btn1")
    const btn2 = document.getElementById("p1_btn2")
    const btn3 = document.getElementById("p1_btn3")
    const btn4 = document.getElementById("p1_btn4")

    btn1.style.backgroundColor = "red"
    btn2.style.backgroundColor = "red"
    btn3.style.backgroundColor = "green"
    btn4.style.backgroundColor = "red"

    if (track1 == 0){
        correct++
        track1++
    }
    if (correct == 5){
        alert(`¡Buen trabajo haz completado el quiz! Te equivocaste ${wrong} veces`)
    }
    console.log(correct)
}

function respuestaCorrecta2(){

    const btn1 = document.getElementById("p2_btn1")
    const btn2 = document.getElementById("p2_btn2")
    const btn3 = document.getElementById("p2_btn3")
    const btn4 = document.getElementById("p2_btn4")

    btn1.style.backgroundColor = "red"
    btn2.style.backgroundColor = "red"
    btn3.style.backgroundColor = "red"
    btn4.style.backgroundColor = "green"

    if (track2 == 0){
        correct++
        track2++
    }
    if (correct == 5){
        alert(`¡Buen trabajo haz completado el quiz! Te equivocaste ${wrong} veces`)
    }
    console.log(correct)
}

function respuestaCorrecta3(){

    const btn1 = document.getElementById("p3_btn1")
    const btn2 = document.getElementById("p3_btn2")
    const btn3 = document.getElementById("p3_btn3")
    const btn4 = document.getElementById("p3_btn4")

    btn1.style.backgroundColor = "red"
    btn2.style.backgroundColor = "green"
    btn3.style.backgroundColor = "red"
    btn4.style.backgroundColor = "red"

    if (track3 == 0){
        correct++
        track3++
    }
    if (correct == 5){
        alert(`¡Buen trabajo haz completado el quiz! Te equivocaste ${wrong} veces`)
    }
    console.log(correct)
}

function respuestaCorrecta4(){

    const btn1 = document.getElementById("p4_btn1")
    const btn2 = document.getElementById("p4_btn2")
    const btn3 = document.getElementById("p4_btn3")
    const btn4 = document.getElementById("p4_btn4")

    btn1.style.backgroundColor = "green"
    btn2.style.backgroundColor = "red"
    btn3.style.backgroundColor = "red"
    btn4.style.backgroundColor = "red"

    if (track4 == 0){
        correct++
        track4++
    }
    if (correct == 5){
        alert(`¡Buen trabajo haz completado el quiz! Te equivocaste ${wrong} veces`)
    }
    console.log(correct)
}

function respuestaCorrecta5(){

    const btn1 = document.getElementById("p5_btn1")
    const btn2 = document.getElementById("p5_btn2")
    const btn3 = document.getElementById("p5_btn3")
    const btn4 = document.getElementById("p5_btn4")

    btn1.style.backgroundColor = "red"
    btn2.style.backgroundColor = "red"
    btn3.style.backgroundColor = "green"
    btn4.style.backgroundColor = "red"

    if (track5 == 0){
        correct++
        track5++
    }
    
    if (correct == 5){
        if (wrong == 0){
            alert(`¡Buen trabajo haz completado el quiz! ¡No te equivocaste ni una vez!`)
        } else if (wrong == 1){
            alert(`¡Buen trabajo haz completado el quiz! ¡Te equivocaste solo una vez!`)
        } else if (wrong > 1) {
            alert(`¡Buen trabajo haz completado el quiz! Te equivocaste ${wrong} veces`)
        }
    }
    console.log(correct)
}