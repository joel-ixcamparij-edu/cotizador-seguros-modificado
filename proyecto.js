//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%


//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

var casado = prompt("¿Está casado actualmente?", "si/no")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas?")
//Comprobamos la cantidad de hijos solamente si los tienen

var cantidad_hijos = 0

/**
 * 1. conviertiendo la cantidad de hijos a numero
 */

if("SI" == hijos.toUpperCase()){
  cantidad_hijos = prompt("¿Que cantidad de hijos e hijas tiene (en total)?")
  cantidad_hijos = parseInt(cantidad_hijos)
}

//Aquí se calcula el recargo total basado en las respuestas ingresadas
recargo_asegurado = 0
//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edad_numero>=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo_asegurado = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo_asegurado
} else if(edad_numero>=25 && edad_numero<50){
  //Calculamos el recargo en base a la edad 
  recargo_asegurado = precio_base * edad_25
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo_asegurado
} else if(edad_numero>=50){
  //Calculamos el recargo en base a la edad 
  recargo_asegurado = precio_base * edad_50
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo_asegurado
}

/** 
 * 2. Recargo por la edad del conyuge
 */
recargo_conyuge = 0
if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo_conyuge = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo_conyuge
} else if(edad_conyuge_numero>=25 && edad_conyuge_numero<50){
  //Calculamos el recargo en base a la edad 
  recargo_conyuge = precio_base * edad_25
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo_conyuge
} else if(edad_conyuge_numero>=50){
  //Calculamos el recargo en base a la edad 
  recargo_conyuge = precio_base * edad_50
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo_conyuge
}

/**
 * 3. Recargo por la cantidad de hijos 
 */ 
recargo_hijos = 0
if(cantidad_hijos>0 && !isNaN(cantidad_hijos)){
  //Calculamos el recargo por la cantidad total de hijos
  recargo_hijos = cantidad_hijos * hijos_recargo * precio_base;
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo_hijos;
}

precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+ nombre + ". El recargo total sera de: " + recargo_total + ". El precio sera de: "+precio_final)

