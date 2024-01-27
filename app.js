let numerosJugados = [];
let numeroMaximo = 10;

function asignarElementoTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto === numeroUsuario) {
        asignarElementoTexto('p', `¡Acertaste el número! en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //El susario no acerto
        if (numeroSecreto > numeroUsuario) {
            asignarElementoTexto('p', `El número es mayor`)
        } else {
            asignarElementoTexto('p', `El número es menor`)
        }
        intentos++
        limpiaCaja();
    };
    return;
};


function asignarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //return numeroGenerado;
    if (numerosJugados.length == numeroMaximo) {
        asignarElementoTexto(`p`, `Se completo el maximo de ${numeroMaximo} jugadas.`)
    } else {
        if (numerosJugados.includes(numeroGenerado)) {
            return asignarNumeroSecreto();
        } else {
            numerosJugados.push(numeroGenerado);
            return numeroGenerado;
        };
    };
}

function limpiaCaja() {
    document.querySelector('#valorUsuario').value = '';
};

function condicionesIniciales() {
    asignarElementoTexto(`h1`, 'juego del Número Secreto');
    asignarElementoTexto(`p`, `Indica un número (1-${numeroMaximo}):`);
    numeroSecreto = asignarNumeroSecreto();
    intentos = 1;
    console.log(numerosJugados);
    console.log(numeroSecreto);
};

function reiniciarJuego() {
    //Limpiar la caja
    limpiaCaja();
    //Generar número aleatorio
    //Mensajes iniciales
    //Reiniciar conteo
    condicionesIniciales();
    //Deshabilitar NuevoJuego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
};

condicionesIniciales();