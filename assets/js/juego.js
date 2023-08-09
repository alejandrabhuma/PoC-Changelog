(() => {
    'use strict' //Se recomienda usar en todo momento que se tabaje con patrón módulo


    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];
    let puntosJugadores = [];


//Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

    const puntosHTML = document.querySelectorAll('small'),
        divCartasJugador = document.querySelector('#jugador-cartas'),
        divCartasComputadora = document.querySelector('#computadora-cartas');
    
    const inicializarJuego = (numJugadores=1 )=>{
        deck=crearDeck();
        for (let i; i< numJugadores; i++){
            puntosJugadores.push(0);
        }
    }   

})();