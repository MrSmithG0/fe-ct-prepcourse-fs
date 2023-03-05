/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   var elevado = Math.pow(num, 2);
   return elevado; 
   // return Math.pow(num,2)// forma simplificada.
}

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   var elevado = Math.pow(num,3);
   return elevado; 

   // return Math.pow(num,3)// forma simplificada.
}

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:

   var exponente = Math.pow(num, exponent);
   return exponente; 
// return Math.pow(num,exponent)// forma simplificada.
}


function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   var numeroRedondeado = Math.round(num);
   return numeroRedondeado;
   //return Math.round(num); // forma simplificada.
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:

   var redHaciArriba = Math.ceil(num);
   return redHaciArriba; 
   // return Math.ceil(num);// forma simplificada.

}

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   var random = Math.random();
   return random;

   // return Math.random();

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
