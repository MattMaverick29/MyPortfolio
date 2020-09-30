var piedra = document.getElementById('piedra');
var papel = document.getElementById('papel');
var tijera = document.getElementById('tijera');
var numero = document.getElementById('numero');
var resul = document.getElementById('resul');
var optionAI = document.getElementById('optionAI');
var win = document.getElementById('wins');
var lost = document.getElementById('lost');
var draw = document.getElementById('draw');
var imagen = new Image();
var contador = 0,
    empates = 0,
    ganados = 0,
    perdidos = 0;

function motor() {
    const opciones = ["Piedra", "Papel", "Tijera"];
    var ran1 = Math.random() * (3 - 0);
    var ran2 = Math.floor(ran1);
    var randomIA = opciones[ran2];
    return randomIA;
}

function botones(id_boton) {
    let id = id_boton.id;
    let opcionIA = motor();
    let cantidad_rondas = parseInt(numero.value);

    if (contador < cantidad_rondas) {
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
                console.log(contador);
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
                console.log(contador);
                break;
        }
    } else {
        if (contador == cantidad_rondas) {
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
            if (numero.value == 0) {
                resul.innerHTML = 'Tenes que elegir una cantidad de rondas para jugar...';
            }
        }
    }
}

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