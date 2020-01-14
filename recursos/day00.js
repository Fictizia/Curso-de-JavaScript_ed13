/**
 * Valores, variables y constantes
 * 
 * var 
 * let 
 * const
 */

 // let || const || var nombre_mi_variable = asignacion;


/**
 * Definir variables
 */
let range;

/**
 * Declaración de variables
 */ 
let name = 'Steph'; // String
let children = false; //Boolean

/**
 * Diferencia let y var
 * 
 * let y const => ES6
 * var => anterior a ES6
 * 
 * let y const => ambito de bloque
 * var => ambito global SI Y SOLO SI no esta en una funcion, en caso contrario var tiene ambito de funcion  
 * 
 * let y var => para valores que mutan
 * const => para valores que NO MUTAN = CONSTANTES
 */






/**
 * Funciones
 * @param {Number} space 
 * @param {Number} time 
 */
function speed(space, time) { //inicio del bloque
    // si space && time son numeros
        // si space && time son distintos de 0
    let speed;
    speed = space / time;
    return speed;
    // sino
    //devuelve un error
} //final del bloque

speed(25,1); //Invoco la funcion speed
