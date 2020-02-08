var posx = 20;
var posy = 20;
var listContent = []
var selector;

function init() {
    initCirculo();
    selector = document.getElementById("list");
    initAddName();
    initRemove();
}

function initAddName() {
    var addName = document.getElementById("addName");
    addName.onclick = addPerson;
}

function addPerson() {
    let texto = document.getElementById("name");
    let option = document.createElement("option")
    option.text = texto.value;
    if (texto.value != "") {
        listContent.push(texto.value);
        selector.add(option)
    } else {
        alert("Campo de nombre vacío.")
    }
}

function initRemove() {
    var removePerson = document.getElementById("clearName");
    removePerson.onclick = removeName;
}

function removeName() {
    let seleccionado = selector.selectedIndex;
    if (seleccionado >= 0) {
        listContent.splice(seleccionado, 1);
        selector.remove(seleccionado);
    } else {
        alert("Se debe seleccionar un nombre")
    }
}

function initCirculo() {
    var canvas = document.getElementById("lienzo");
    var contexto = canvas.getContext('2d');
    dibujarCirculo(canvas, contexto);
    window.addEventListener("keydown", function() {
        precionarTecla(this.event, canvas, contexto);
    }, false);
}

function precionarTecla(e, canvas, contexto) {
    let corrimiento = 5;
    switch (e.keyCode) {
        case 37: // izq
            if (posx - 15 - corrimiento > 0) {
                posx = posx - corrimiento;
            }
            break;
        case 38: //up
            //console.log("up");
            if ((posy - 15) - corrimiento > 0) {
                posy = posy - corrimiento;
            }
            break;
        case 39:
            if (posx + 15 + corrimiento < canvas.width) {
                posx = posx + corrimiento;
            }
            break;
        case 40:
            if (posy + 15 + corrimiento < canvas.height) {
                posy = posy + corrimiento;
            }
            break;
    }
    dibujarCirculo(canvas, contexto);
}

function dibujarCirculo(canvas, contexto) {
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    contexto.beginPath();
    contexto.arc(posx, posy, 20, 0, 2 * Math.PI, false);
    contexto.lineWidth = 3;
    contexto.strokeStyle = '#FF0000';
    contexto.stroke();
}

init();