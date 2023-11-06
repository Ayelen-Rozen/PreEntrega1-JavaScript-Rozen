//Piedra Papel o Tijera

let jugador;
let pc;
let continuarJugando = true;

function aleatoria() {
    return Math.ceil(Math.random() * 3)
}


function eleccion(jugada) {
    let resultado = "";

    if (jugada == 1) {
        resultado = "PIEDRA 🪨"

    } else if (jugada == 2) {
        resultado = "PAPEL 📄"
    } else if (jugada == 3) {
        resultado = "TIJERA ✂️"
    } else {
        resultado = "TU ELECCION ES INCORRECTA"
    }
return (resultado)

}

while(continuarJugando){
    jugador = prompt("Elija: 1 - PIEDRA, 2 - PAPEL, 3 - TIJERA")
    pc = aleatoria();
    alert("Elegiste: "+ eleccion(jugador))
    alert ("PC eligió: " + eleccion(pc))
    
    
    if (jugador == pc) {
        alert("Empataron")
    } else if (jugador == 1 && pc == 3) {
        alert("GANASTE!!")
    } else if (jugador == 2 && pc == 1) {
        alert("GANASTE!!")
    } else if (jugador == 3 && pc == 2) {
        alert("GANASTE!!")
    } else {
        alert("PERDISTE")
    }

    let respuesta = prompt("¿Quieres jugar de nuevo? (si o no)");
    if (respuesta.toLowerCase() !== "si") {
        continuarJugando = false;
    }

}

alert("Gracias por jugar. ¡Hasta la próxima!");