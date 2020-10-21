//Primero declaro todas las variables globales
var piedra = document.getElementById('piedra');
var papel = document.getElementById('papel');
var tijera = document.getElementById('tijera');
var numero = document.getElementById('numero');
var resul = document.getElementById('resul');
var optionAI = document.getElementById('optionAI');
var win = document.getElementById('wins');
var lost = document.getElementById('lost');
var draw = document.getElementById('draw');
var musica = document.getElementById('musica');
var estado = 0;
var imagen = new Image();
var contador = 0,
    empates = 0,
    ganados = 0,
    perdidos = 0;

//Creo el motor de la IA obteniendo un valor aleatorio y redondeadolo hacia abajo para tener un indice de la lista opciones
function motor() {
    const opciones = ["Piedra", "Papel", "Tijera"];
    var ran1 = Math.random() * (3 - 0);
    var ran2 = Math.floor(ran1);
    var randomIA = opciones[ran2];
    return randomIA;
}

//esta funcion se encarga de las comparaciones, graficos y aumento de contadores durante el juego
function compara(id, opcionIA) {
    switch (id) {
        case 'piedra':
            if (opcionIA == 'Piedra') {
                ++empates;
                ++contador;
                draw.innerHTML = 'Empates: ' + empates;
                optionAI.innerHTML = '<img src="img/ppt1-1.png" alt="piedra" class="battle"><img src="img/ppt1-1.png" alt="piedra">';
                resul.innerHTML = 'Empate...';
            } else {
                if (opcionIA == 'Papel') {
                    ++perdidos;
                    ++contador;
                    lost.innerHTML = 'Perdidos: ' + perdidos;
                    optionAI.innerHTML = '<img src="img/ppt1-1.png" alt="piedra" class="battle"><img src="img/ppt1-2.png" alt="papel">';
                    resul.innerHTML = 'Perdiste...';
                } else {
                    if (opcionIA == 'Tijera') {
                        ++ganados;
                        ++contador;
                        win.innerHTML = 'Ganados: ' + ganados;
                        optionAI.innerHTML = '<img src="img/ppt1-1.png" alt="piedra" class="battle"><img src="img/ppt1-3.png" alt="tijera">';
                        resul.innerHTML = 'Ganaste...';
                    }
                }
            }
            break;
        case 'papel':
            if (opcionIA == 'Papel') {
                ++empates;
                ++contador;
                draw.innerHTML = 'Empates: ' + empates;
                optionAI.innerHTML = '<img src="img/ppt1-2.png" alt="papel" class="battle"><img src="img/ppt1-2.png" alt="papel">';
                resul.innerHTML = 'Empate...';
            } else {
                if (opcionIA == 'Tijera') {
                    ++perdidos;
                    ++contador;
                    lost.innerHTML = 'Perdidos: ' + perdidos;
                    optionAI.innerHTML = '<img src="img/ppt1-2.png" alt="papel" class="battle"><img src="img/ppt1-3.png" alt="tijera">';
                    resul.innerHTML = 'Perdiste...';
                } else {
                    if (opcionIA == 'Piedra') {
                        ++ganados;
                        ++contador;
                        win.innerHTML = 'Ganados: ' + ganados;
                        optionAI.innerHTML = '<img src="img/ppt1-2.png" alt="papel" class="battle"><img src="img/ppt1-1.png" alt="piedra">';
                        resul.innerHTML = 'Ganaste...';
                    }
                }
            }
            break;
        case 'tijera':
            if (opcionIA == 'Tijera') {
                ++empates;
                ++contador;
                draw.innerHTML = 'Empates: ' + empates;
                optionAI.innerHTML = '<img src="img/ppt1-3.png" alt="tijera" class="battle"><img src="img/ppt1-3.png" alt="tijera">';
                resul.innerHTML = 'Empate...';
            } else {
                if (opcionIA == 'Piedra') {
                    ++perdidos;
                    ++contador;
                    lost.innerHTML = 'Perdidos: ' + perdidos;
                    optionAI.innerHTML = '<img src="img/ppt1-3.png" alt="tijera" class="battle"><img src="img/ppt1-1.png" alt="piedra">';
                    resul.innerHTML = 'Perdiste...';
                } else {
                    if (opcionIA == 'Papel') {
                        ++ganados;
                        ++contador;
                        win.innerHTML = 'Ganados: ' + ganados;
                        optionAI.innerHTML = '<img src="img/ppt1-3.png" alt="tijera" class="battle"><img src="img/ppt1-2.png" alt="papel">';
                        resul.innerHTML = 'Ganaste...';
                    }
                }
            }
            break;
    }
}

/* creo la funcion que se activa cada vez que se elige piedra, papel o tijera
se compara realizan las comparaciones en dos lugares para evitar que el juego
no se corte un turno antes de que llegue a la cantidad de rondas que el usuario definio
comparando en los lugares que se ven a continuacion se logra automatizar el final
en el momento correcto y llegar a la cantidad de turnos correctos */

function botones(id_boton) {
    //variables locales
    let id = id_boton.id;
    let opcionIA = motor();
    let cantidad_rondas = parseInt(numero.value);

    //primero me aseguro que se haya ingresado una cantidad de rondas para jugar mayor a 0
    if (cantidad_rondas == 0) {
        resul.innerHTML = 'Tenés que elegir una cantidad de rondas para jugar...';
    } else {
        //este bloque esta encargado de verificar el final del juego y dar las notificaciones
        if (contador == cantidad_rondas - 1) {
            //acá llamo a la funcion que hace las comparaciones
            compara(id, opcionIA);
            if (ganados > perdidos) {
                resul.innerHTML = 'Ganaste!!!';
                optionAI.innerHTML = '<img src="img/ganador.gif" alt="ganador" class="final-img">';
            } else {
                if (ganados == perdidos) {
                    resul.innerHTML = 'Empetaste...';
                    optionAI.innerHTML = '<img src="img/empate.gif" alt="empate" class="final-img">';
                } else {
                    resul.innerHTML = 'Perdiste u.u';
                    optionAI.innerHTML = '<img src="img/llorando.gif" alt="llorando" class="final-img">';
                }
            }
        } else {
            //acá llamo a la funcion que hace las comparaciones
            compara(id, opcionIA);
        }
    }
}

//esta funcion se ejecuta al precionar el boton de reload y reinicia todos los contadores en JS y HTML
function recargar() {
    ganados = 0;
    perdidos = 0;
    empates = 0;
    contador = 0;
    resul.innerHTML = '';
    optionAI.innerHTML = '';
    win.innerHTML = 'Ganados:';
    lost.innerHTML = 'Perdidos:';
    draw.innerHTML = 'Empates:';
    numero.value = 0;
}



function mutear() {
    if (estado == 0) {
        musica.innerHTML = '<audio autoplay loop preload="auto"><source src = "audio/music.ogg" type = "audio/ogg">Tu navegador no soporta audio HTML5. </audio><i class="fas fa-volume-up"></i>';
        estado = 1;
    } else {
        musica.innerHTML = '<audio autoplay loop preload="auto" muted><source src = "audio/music.ogg" type = "audio/ogg">Tu navegador no soporta audio HTML5. </audio><i class="fas fa-volume-mute"></i>';
        estado = 0;
    }
}