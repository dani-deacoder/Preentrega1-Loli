
//Juego para adivinar un numero al azar

function advinarNumero() {//Funcion para adivinar el numero
    let numero = Math.floor(Math.random() * 100) + 1;//Numero aleatorio entre 1 y 100
    let intentos = 10;//Numero de intentos
    let numeroUsuario = 0;//Numero que introduce el usuario
    let ganar = false;//Variable para saber si el usuario ha ganado o no
    while (intentos > 0) {//Bucle para que el usuario pueda introducir numeros hasta que se le acaben los intentos
        numeroUsuario = prompt("Adivina el numero entre 1 y 100");
        if (numeroUsuario == numero) {
            ganar = true;
            break;
        } else if (numeroUsuario > numero) {
            alert("El numero es menor");
        } else {
            alert("El numero es mayor");
        }
        intentos--;
    }
    if (ganar) {//Si el usuario ha ganado
        alert("Has ganado");
    } else {//Si el usuario ha perdido
        alert("Has perdido");
    }
    volver();
}

function bienvenida(){//Funcion para dar la bienvenida al usuario
    alert("Bienvenido al juego");
    alert("Tienes 10 intentos para adivinar el numero");
    alert("El numero esta entre 1 y 100");
    alert("Buena suerte");
    advinarNumero();
    
}
function volver(){//Funcion para volver a jugar
    let opcion = prompt("¿Quieres volver a jugar? 1.Si 2.No");
    if (opcion == 1) {
        advinarNumero();
    } else {
        alert("Gracias por jugar");
    }
}

function main() {//Funcion principal
    bienvenida();
}

main();




