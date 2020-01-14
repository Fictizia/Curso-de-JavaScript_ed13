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
    let result = y;

    if(typeof x === Number && typeof y === Number) {
        if (x - y === 0) {
            result = 'X e Y son iguales';
        } else {
            // O bien x>y o x<y
            if (x > y ) {
            // Devuelvo x
            result = x;
            } 
        }
    }

    return result;
}