/**
 * Pseudo-codigo
 */

// Diseña un algoritmo que lea dos números y los compare. 
// Resultado: decir cual es mayor o si son iguales.

// Primera solucion
function compare(x , y) {
    let result = 'Y es mayor';

    if (x - y === 0) {
        result = 'X e Y son iguales';
    } else {
        // O bien x>y o x<y 
        if (x > y ) {
        // Devuelvo x
        result = 'X es mayor';
        } 
    }

    return result;
}


// Segunda solucion
function compare(x , y) {
    let result;
        if (x - y === 0) {
            result = 'X e Y son iguales';
        } else {
            //Operador ternario
            result = x > y ? x : y;
        }
    return result;
}