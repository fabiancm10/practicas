"use strict";
function calcular() {
    const num1 = parseInt(document.getElementById('num1').value, 10);
    const num2 = parseInt(document.getElementById('num2').value, 10);
    const operacion = document.getElementById('operacion').value;
    let resultado;
    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        default:
            console.log("Operación no válida");
            resultado = 0;
            break;
    }
    const resultadoElement = document.getElementById('resultado');
    if (resultadoElement) {
        resultadoElement.innerHTML = `El resultado de la operación es: ${resultado}`;
    }
}
