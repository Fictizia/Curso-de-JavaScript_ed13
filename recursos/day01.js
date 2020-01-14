/**
 * Temario clase 2
 * 
 * Repaso del concepto de variable: DONE
 * Tipos de variables: DONE 
 * Operadores: DONE
 * Operaciones basicas: DONE
 * Asignación en variables: DONE
 * Comparacion
 */


 /**
  * Variables = Datos
  * 
  * Las variables son las estructuras donde almacenamos los datos
  * Los datos tienen un tipo
  * 
  * Para definir una variable -> var || let || const
  * Tipos de datos en JavaScript
  * 
  * undefined
  * null
  * boolean -> true || false
  * String
  * Symbol
  * number -> NaN
  * Object
  * Function
  */


 var noValue;                  //undefined

 var name = 'Steph';           //String
 var age = 25;                 //Number
 var hasChildren = false;      //Boolean

 var person1 = {               // person es una variable de tipo Object
     name: 'Estefanía',        //String -> propiedades del objecto person
     age: 25,                  //Number -> propiedades del objecto person
     hasChildren: false        //Boolean -> propiedades del objecto person
 };

 var list = [6,1,1,0,1,5,9,1]; //Array
 var phoneNumber = 671101591;

/**
* Operadores
* Nos permiten manejar/operar con datos => numeros
*/

var x = 12;
var y = x + 24;
var z = x + (2*y) - (2*x);

var result = x + y + z;
x = y * z;

var firstName = 'Steph';
var lastName = 'Torres';
var fullName = firstName + lastName;


/**
* undefined --> NaN en operaciones aritmeticas
* undefined --> false en un contexto booleano
*/

// undefined 
var z;                          // undefined
var x = z + 24;                 // undefined  + 24 => NaN

/**
* Ejercicio pseudo-codigo
* Habilitar el boton de un formulario cuando se introduzca un valor en el input
* 
* Algoritmo:
* Valor de un input --> tiene valor o no
* Valor de un boton --> habilitado o no habilitado  
*/

function buttonState(inputValue) {
 // necesito una variable para guardar inputValue: DONE (86)
 // necesito una variable para controlar el estado del boton: DONE (87)
 // necesito comprobar el valor de mi variable: DONE (89)
 // si mi variable tiene algo --> cambio el valor del estado del boton: DONE (90)

 let bState = false;

 if (inputValue) { // Condicional
   bState = true;
 }                         
}