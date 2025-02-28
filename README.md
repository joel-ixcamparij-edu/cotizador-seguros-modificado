Cotizador de Seguros - Proyecto Final

1. Problema a Resolver
La empresa de seguros TK-U realiza cotizaciones manualmente, lo que limita la capacidad a 50 cotizaciones por día y puede generar pérdida de clientes por la demora. Para solucionar esto, se desarrollará un cotizador automático que calculará el precio del seguro según la edad, estado civil y cantidad de hijos del asegurado.

2. Condiciones que Afectan la Cotización
El precio del seguro se ve afectado por:

a. Edad del asegurado
b. Estado civil y edad del cónyuge (si aplica)
c. Cantidad de hijos

3. Cálculo de los Recargos
Los recargos se aplican en función de estos criterios:

a. Si la edad del asegurado o cónyuge es entre 18 y 24 años → 10% del precio base.
b. Si la edad del asegurado o cónyuge es entre 25 y 49 años → 20% del precio base.
c. Si la edad del asegurado o cónyuge es 50 años o más → 30% del precio base.

Cada hijo añade un recargo del 20% sobre el precio base.

Ejemplo de cálculo:
    Si el asegurado tiene 23 años (10% recargo), su cónyuge tiene 26 años (20% recargo) y tienen 2 hijos (20% por hijo), el cálculo sería:

    Precio base: Q.2,000
    Recargo asegurado: Q.200
    Recargo cónyuge: Q.400
    Recargo hijos: Q.800
    Precio total: Q.3,400

4. Algoritmo

Solicitar la edad del asegurado.
Preguntar si está casado; si la respuesta es 'si', pedir la edad del cónyuge.
Preguntar si tiene hijos; si la respuesta es 'si', pedir la cantidad de hijos.

Calcular los recargos según edad y cantidad de hijos.
Sumar los recargos al precio base.
Mostrar el resultado final.

5. Archivos incluidos en el Repositorio

proyecto.js → Este es el código fuente del cotizador en JavaScript.
README.md → La explicación del problema y el algoritmo explicado.

6. Instrucciones para Ejecutar

Abre el navegador y accede a https://jsfiddle.net/.
Copia y pega el código de proyecto.js.
Ejecuta y sigue las instrucciones.