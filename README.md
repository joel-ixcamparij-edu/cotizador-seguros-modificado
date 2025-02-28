# Cotizador de Seguros - Proyecto Final

## 1. Problema a Resolver  
   a. La empresa de seguros TK-U realiza cotizaciones manualmente.  
   b. Este proceso limita la capacidad a 50 cotizaciones por día.  
   c. La demora en las cotizaciones puede generar pérdida de clientes.  

   **Solución:** Se desarrollará un cotizador automático que calculará el precio del seguro según la edad, estado civil y cantidad de hijos del asegurado.  

## 2. Condiciones que Afectan la Cotización  
   a. Edad del asegurado.  
   b. Estado civil y edad del cónyuge (si aplica).  
   c. Cantidad de hijos.  

## 3. Cálculo de los Recargos  
   a. Si la edad del asegurado o cónyuge es entre 18 y 24 años → 10% del precio base.  
   b. Si la edad del asegurado o cónyuge es entre 25 y 49 años → 20% del precio base.  
   c. Si la edad del asegurado o cónyuge es 50 años o más → 30% del precio base.  
   d. Cada hijo añade un recargo del 20% sobre el precio base.  

   **Ejemplo de cálculo:**  
   - Precio base: Q.2,000  
   - Asegurado de 23 años (10% recargo): Q.200  
   - Cónyuge de 26 años (20% recargo): Q.400  
   - Dos hijos (20% por hijo): Q.800  
   - **Precio total:** Q.3,400  

## 4. Algoritmo  
   a. Solicitar la edad del asegurado.  
   b. Preguntar si está casado; si la respuesta es 'sí', pedir la edad del cónyuge.  
   c. Preguntar si tiene hijos; si la respuesta es 'sí', pedir la cantidad de hijos.  
   d. Calcular los recargos según edad y cantidad de hijos.  
   e. Sumar los recargos al precio base.  
   f. Mostrar el resultado final.  

## 5. Archivos incluidos en el Repositorio  
   a. `proyecto.js` → Código fuente del cotizador en JavaScript.  
   b. `README.md` → Explicación del problema y el algoritmo.  

## 6. Instrucciones para Ejecutar  
   a. Abre el navegador y accede a https://jsfiddle.net/.  
   b. Copia y pega el código de `proyecto.js`.  
   c. Ejecuta y sigue las instrucciones.  
