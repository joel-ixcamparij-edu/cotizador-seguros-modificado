# Cotizador de Seguros - Proyecto Modificado

## 1. Problema a Resolver  
   a. La empresa de seguros TK-U realiza cotizaciones manualmente.  
   b. Este proceso limita la capacidad a 50 cotizaciones por día.  
   c. La demora en las cotizaciones puede generar pérdida de clientes.  

   **Solución:** Se implementó un cotizador automático que ahora permite realizar múltiples cotizaciones y agregar nuevos factores en el cálculo del seguro.  

## 2. Mejoras Implementadas  
   a. Se permite realizar **múltiples cotizaciones** hasta que el usuario decida salir.  
   b. Se agregaron **nuevos recargos** por:  
      - **Propiedades**: Se aplica un recargo del 35% sobre el precio base por cada propiedad.  
      - **Ingresos**: Se aplica un recargo del 5% sobre el salario mensual del asegurado.  

## 3. Cálculo de los Recargos  
   a. Si la edad del asegurado o cónyuge es entre 18 y 24 años → 10% del precio base.  
   b. Si la edad del asegurado o cónyuge es entre 25 y 49 años → 20% del precio base.  
   c. Si la edad del asegurado o cónyuge es 50 años o más → 30% del precio base.  
   d. Cada hijo añade un recargo del 20% sobre el precio base.  
   e. Cada propiedad añade un recargo del 35% sobre el precio base.  
   f. Los ingresos generan un recargo del 5% sobre el salario mensual ingresado.  

   **Ejemplo de cálculo:**  
   - Precio base: Q.2,000  
   - Asegurado de 23 años (10% recargo): Q.200  
   - Cónyuge de 26 años (20% recargo): Q.400  
   - Dos hijos (20% por hijo): Q.800  
   - Tres propiedades (35% por propiedad): Q.2,100  
   - Ingreso mensual de Q.8,000 (5% recargo): Q.400  
   - **Precio total:** Q.5,900  

## 4. Algoritmo  
   a. Solicitar la edad del asegurado.  
   b. Preguntar si está casado; si la respuesta es 'sí', pedir la edad del cónyuge.  
   c. Preguntar si tiene hijos; si la respuesta es 'sí', pedir la cantidad de hijos.  
   d. Preguntar cuántas propiedades posee.  
   e. Preguntar el ingreso mensual del asegurado.  
   f. Calcular los recargos según edad, cantidad de hijos, propiedades e ingresos.  
   g. Sumar los recargos al precio base.  
   h. Mostrar el resultado final.  
   i. Permitir realizar otra cotización o salir del programa.  

## 5. Archivos incluidos en el Repositorio  
   a. `proyecto_modificado.js` → Código fuente del cotizador en JavaScript con las mejoras implementadas para considerar recargos por propiedades e ingresos del asegurado.  
   b. `README.md` → Explicación del problema, mejoras y algoritmo detallado.  

## 6. Instrucciones para Ejecutar  
   a. Abre el navegador y accede a https://jsfiddle.net/.  
   b. Copia y pega el código de `proyecto_modificado.js`.  
   c. Ejecuta y sigue las instrucciones.  
