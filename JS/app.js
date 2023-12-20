

document.addEventListener('DOMContentLoaded', function () {
    let start = document.getElementById("start_game");
    let opt_piedra = document.getElementById("piedra");
    
    console.log(opt_piedra);
    let opt_papel = document.getElementById("papel");
    
    console.log(opt_papel);
    
    let opt_tijera = document.getElementById("tijera");
    console.log(opt_tijera);
    let img_opt_player1 = document.getElementById("player1");
    let img_opt_player2 = document.getElementById("player2");
    let ptos_player1 = 0;
    let ptos_player2 = 0;
    let select_player1;
    let select_player2;
    let vs;

    if (start && opt_piedra && opt_papel && opt_tijera && img_opt_player1 && img_opt_player2) {
        opt_piedra.onclick = function () {
            select_player1 = "piedra";
            img_opt_player1.src = "./style/img/piedra_izquierda.svg";
            img_opt_player2.src = "./style/img/bot.svg";
            playGame();
            console.log("Se hizo clic en piedra");
        }
        opt_papel.onclick = function () {
            select_player1 = "papel";
            img_opt_player1.src = "./style/img/papel_izquierda.svg";
            img_opt_player2.src = "./style/img/bot.svg";
            playGame();
            console.log("Se hizo clic en papel");
        }
        opt_tijera.onclick = function () {
            select_player1 = "tijera";
            img_opt_player1.src = "./style/img/tijera_izquierda.svg";
            img_opt_player2.src = "./style/img/bot.svg";
            playGame();
            console.log("Se hizo clic en tijera");
        }

        

        start.onclick = function () {
            select_player2 = opt_random();
            display_option_player2(select_player2);
            game_vs(select_player1, select_player2);
            console.log(select_player1, select_player2.toString());
        }
    } else {
        console.log("Alguno de los elementos no se encontró en el DOM.");
    }

    function opt_random() {
        let val_opt_random = ["piedra", "papel", "tijera"];
        return val_opt_random[Math.floor(Math.random() * val_opt_random.length)];
    }

    function game_vs(select_player1, select_player2) {
        if (select_player1 == "piedra") {
            if (select_player2 == "piedra") {
                vs = "same";
            } else if (select_player2 == "papel") {
                vs = "p2win";
            } else {
                vs = "p1win";
            }
        } else if (select_player1 == "papel") {
            if (select_player2 == "papel") {
                vs = "same";
            } else if (select_player2 == "tijera") {
                vs = "p2win";
            } else {
                vs = "p1win";
            }
        } else if (select_player1 == "tijera") {
            if (select_player2 == "tijera") {
                vs = "same";
            } else if (select_player2 == "piedra") {
                vs = "p2win";
            } else {
                vs = "p1win";
            }
        }

    }

    if (vs == "p1win") {
        document.getElementById("result").innerText = "Player 1 gana";
        document.getElementById("result").style.color = "#3FA796";
        ptos_player1++;
        document.getElementById("ptos_player1").innerText = ptos_player1;
    } else if (vs == "same") {
        document.getElementById("result").innerText = "Empate";
        document.getElementById("result").style.color = "#FEC260";
    } else if (vs == "p2win") {
        document.getElementById("result").innerText = "Player 2 gana";
        document.getElementById("result").style.color = "#A10035";
        ptos_player2++;
        document.getElementById("ptos_player2").innerText = ptos_player2;
    }

    function display_option_player2(select_player2) {
        if (select_player2 == "piedra") {
            img_opt_player2.src = "./img/piedra_derecha.svg";
        } else if (select_player2 == "papel") {
            img_opt_player2.src = "./img/papel_derecha.svg";
        } else {
            img_opt_player2.src = "./img/tijera_derecha.svg";
        }
    }

    const reload = document.getElementById('reset');
    reload.addEventListener('click', _ => {
        location.reload();
    });
});



























// document.addEventListener('DOMContentLoaded', function(){

// //Opciones
// let opt_piedra = document.getElementById("piedra");
// let opt_papel = document.getElementById("papel");
// let opt_tijera = document.getElementById("tijera");

// //iniciar juego
// let start = document.getElementById("start_game");

// //jugadores
// let img_opt_player1 = document.getElementById("player1");
// let img_opt_player2 = document.getElementById("player2")

// //recuento
// let ptos_player1 = 0;
// let ptos_player2 = 0;

// //play
// let select_player1;
// let select_player2;
// let vs;

// start.onclick = function () {
//     select_player2 = opt_random();
//     display_option_player2(select_player2);
//     game_vs(select_player1, select_player2);

//     console.log(select_player1, select_player2.toString());
// }

// // Función para la selección aleatoria del bot

// function opt_random() {
//     let val_opt_random = ["piedra", "papel", "tijera"];
//     return val_opt_random[Math.floor(Math.random() * val_opt_random.length)];
// }

// // Event listeners para la selección del jugador 1

// opt_piedra.onclick = function () {
//     select_player1 = "piedra";
//     img_opt_player1.src = "./style/img/piedra_izquierda.svg";
//     img_opt_player2.src = "./style/img/bot.svg";
//     playGame();
// }

// opt_papel.onclick = function () {
//     select_player1 = "papel";
//     img_opt_player1.src = "./style/img/papel_izquierda.svg";
//     img_opt_player2.src = "./style/img/bot.svg";
//     playGame();
// }
// opt_tijera.onclick = function () {
//     select_player1 = "tijera";
//     img_opt_player1.src = "./style/img/tijera_izquierda.svg";
//     img_opt_player2.src = "./style/img/bot.svg";
//     playGame();
// }



// function game_vs(select_player1, select_player2) {

//     if (select_player1 == "piedra") {
//         if (select_player2 == "piedra") {
//             vs = "same";
//         } else if (select_player2 == "papel") {
//             vs = "p2win";
//         } else {
//             vs = "p1win";
//         }
//     } else if (select_player1 == "papel") {
//         if (select_player2 == "papel") {
//             vs = "same";
//         } else if (select_player2 == "tijera") {
//             vs = "p2win";
//         } else {
//             vs = "p1win";
//         }
//     } else if (select_player1 == "tijera") {
//         if (select_player2 == "tijera") {
//             vs = "same";
//         } else if (select_player2 == "piedra") {
//             vs = "p2win";
//         } else {
//             vs = "p1win";
//         }
//     }

//     if (vs == "p1win") {
//         document.getElementById("result").innerText = "Player 1 gana";
//         document.getElementById("result").style.color = "#3FA796";
//         ptos_player1++;
//         document.getElementById("ptos_player1").innerText = ptos_player1;
//     } else if (vs == "same") {
//         document.getElementById("result").innerText = "Empate";
//         document.getElementById("result").style.color = "#FEC260";
//     } else if (vs == "p2win") {
//         document.getElementById("result").innerText = "Player 2 gana";
//         document.getElementById("result").style.color = "#A10035";
//         ptos_player2++;
//         document.getElementById("ptos_player2").innerText = ptos_player2;
//     }
// }


// function display_option_player2(select_player2){
//     if (select_player2 == "piedra"){
//         img_opt_player2.src = "./img/piedra_derecha.svg";
//     } else if (select_player2 == "papel"){
//         img_opt_player2.src = "./img/papel_derecha.svg";
//     } else {
//         img_opt_player2.src = "./img/tijera_derecha.svg";
//     }
// }

// const reload = document.getElementById('reset');
// reload.addEventListener('click', _ => {
//     location.reload();
// });
// });