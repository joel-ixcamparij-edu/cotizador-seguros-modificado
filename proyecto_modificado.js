// Variables útiles 
// Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000;

// Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%
var propiedad_recargo = 0.35; // 35%
var ingreso_recargo = 0.05; // 5%

// Recargo
var recargo = 0;
var recargo_total = 0;

// Precio final 
var precio_final = 0;

// Bucle para múltiples cotizaciones
while (true) {
    // Mensajes de alerta para ingresar datos 
    var nombre = prompt("Ingrese su nombre o escriba 'Salir' para terminar:");
    if (nombre.toUpperCase() === "SALIR") {
        break;
    }

    var edad = prompt("¿Cuántos años tiene? Ingrese solamente números ");
    
    var casado = prompt("¿Está casado actualmente?", "si/no");
    // Comprobamos la edad del cónyuge, solamente si se está casado/a
    var edad_conyuge;
    if ("SI" == casado.toUpperCase()) {
        edad_conyuge = prompt("¿Qué edad tiene su esposo/a?");
    }

    // Convirtiendo las edades ingresadas a números 
    var edad_numero = parseInt(edad);
    var edad_conyuge_numero = 0;

    // Convirtiendo la edad del cónyuge si se está casado/a
    if ("SI" == casado.toUpperCase()) {
        edad_conyuge_numero = parseInt(edad_conyuge);
    }

    var hijos = prompt("¿Tiene hijos o hijas?");
    // Comprobamos la cantidad de hijos solamente si los tienen
    var cantidad_hijos = 0;

    /**
     * 1. Convirtiendo la cantidad de hijos a número
     */
    if ("SI" == hijos.toUpperCase()) {
        cantidad_hijos = prompt("¿Qué cantidad de hijos e hijas tiene (en total)?");
        cantidad_hijos = parseInt(cantidad_hijos);
    }

    // Nueva información para incluir propiedades e ingresos
    var propiedades = prompt("¿Cuántas propiedades posee?");
    var ingresos = prompt("Ingrese su ingreso mensual en quetzales:");

    // Convertir a números los resultados de lo que se pregunto de propiedades e ingresos
    var propiedades_numero = parseInt(propiedades);
    var ingresos_numero = parseFloat(ingresos);

    // Inicializar recargos en una sola parte del código para tener más orden
    var recargo_asegurado = 0;
    var recargo_conyuge = 0;
    var recargo_hijos = 0;
    var recargo_propiedades = 0;
    var recargo_ingresos = 0;
    recargo_total = 0;

    // Aquí debe calcular el recargo total basado en las respuestas ingresadas

    // Aquí es donde debe de calcular los recargos y el valor final
    // Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
    if (edad_numero >= 18 && edad_numero < 25) {
        // Calculamos el recargo en base a la edad 
        recargo_asegurado = precio_base * edad_18;
    } else if (edad_numero >= 25 && edad_numero < 50) {
        // Calculamos el recargo en base a la edad 
        recargo_asegurado = precio_base * edad_25;
    } else if (edad_numero >= 50) {
        // Calculamos el recargo en base a la edad 
        recargo_asegurado = precio_base * edad_50;
    }

    /** 
     * 2. Recargo por la edad del cónyuge
     */
    if ("SI" == casado.toUpperCase()) {
        if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
            recargo_conyuge = precio_base * edad_18;
        } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
            recargo_conyuge = precio_base * edad_25;
        } else if (edad_conyuge_numero >= 50) {
            recargo_conyuge = precio_base * edad_50;
        }
    }

    /**
     * 3. Recargo por la cantidad de hijos 
     */ 
    if (cantidad_hijos > 0 && !isNaN(cantidad_hijos)) {
        // Calculamos el recargo por la cantidad total de hijos
        recargo_hijos = cantidad_hijos * hijos_recargo * precio_base;
    }

    /**
     * 4. Recargo por cantidad de propiedades 
     */
    if (propiedades_numero > 0 && !isNaN(propiedades_numero)) {
        recargo_propiedades = propiedades_numero * propiedad_recargo * precio_base;
    }

    /**
     * 5. Recargo por ingresos
     */
    if (ingresos_numero > 0 && !isNaN(ingresos_numero)) {
        recargo_ingresos = ingresos_numero * ingreso_recargo;
    }

    // Sumar todos los recargos
    recargo_total = recargo_asegurado + recargo_conyuge + recargo_hijos + recargo_propiedades + recargo_ingresos;
    precio_final = precio_base + recargo_total;

    // Resultado
    alert("Para el asegurado " + nombre + ".\n" +
        "El recargo total será de: Q." + recargo_total.toFixed(2) + ".\n" +
        "El precio final del seguro es: Q." + precio_final.toFixed(2));
}
