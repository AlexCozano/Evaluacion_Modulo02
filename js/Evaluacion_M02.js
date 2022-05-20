var texto = document.querySelector("input");

var palabraAleatoria = rValue;
var time = 10;
var score = 0;
var palabraIngresada = rValue;
var reiniciar = document.querySelector("#reiniciar");

const words = [
    'dirty black summer',
    'thunderkiss 65',
    'The wWorld Order',
    'oddity',
    'sour',
    'summertime sadness',
    'houdini',
    'goes',
    'meantime',
    'dinner alone',
    'drain you',
    'jesuscristpose',
    'Karmacoma',
    'goo',
    'master of reality',
    'starless',
    'jerry was a racer car driver',
    'grounded',
    'Santería'
    ];

// Genera palabra random

function randoXwords(array){     
    var rand = Math.floor(Math.random()*array.length);     
    var rValue = array[rand];     
    return rValue; 
}  
var rValue = randoXwords(words); 


// añade palabra a la web
function addToDOM(){
    let palabra = document.querySelector("#palabra");
    palabra.innerText = rValue;

}
addToDOM()


// Verificador palabras
texto.addEventListener("keyup", function(info){

    if(info.key == "Enter"){

        if ( rValue === texto.value){
             time += 3;
             score += 1;
             texto.value = "";
             updateScore();
             rValue = randoXwords(words);
             addToDOM();
            texto.style.backgroundColor="white";   
        }
    } else {
        if ( rValue === texto.value) {
            texto.style.backgroundColor="green";
        } else {
            texto.style.backgroundColor="red";
        };

    };
    
});

reiniciar.addEventListener("click", function (){

    let input = document.querySelector("input");
    time = 10;
    score = 0;
    input.readOnly = false;
    addToDOM();
    updateClock();

})



// Contador de tiempo
function updateClock() {
    var cuenta = document.getElementById('cuenta').innerHTML = time;
    let input = document.querySelector("input");
    cuenta = document.getElementById('cuenta').style.color ="white"
    
    
    if(time==0){
        cuenta = document.getElementById('cuenta').innerHTML = "GAME OVER";
        input.readOnly = true;
        document.getElementById("reiniciar").style.display = "inline";
        cuenta = document.getElementById('cuenta').style.color ="red"


    } else {
        time-=1;
        setTimeout("updateClock()",1000);
    }
}
updateClock();

// Contador de puntos
function  updateScore(){

    let puntaje = document.querySelector("#puntaje");
    puntaje.innerText= "Puntajes: "+score;

};
updateScore();


// reiniciar con boton