// Ejercicio FizzBuzz

// Objetivo
// Desarrollar una función que imprima un listados de números de 1 hasta N y tener en cuenta los siguientes criterios de aceptación.

// Criterios de aceptación
//DADO que el número que estoy recorriendo es multiplo de 3 ENTONCES imprimo Fizz
//DADO que el número que estoy recorriendo es multiplo de 5 ENTONCES imprimo Buzz
//DADO que el número que estoy recorriendo es multiplo de 3 y de 5 ENTONCES imprimo FizzBuzz
//DADO que el número que estoy recorriendo NO es multiplo de 3 ni de 5 ENTONCES imprimo el número

//Indicaciones:
//Instalar Express Js: (https://www.npmjs.com/package/express)
//Exponer un endpoint que al ser consultado por el navegador imprima el resultado del ejecercio FizzBuzz
//Ejemplo: al visitar la url http://localhost:3000/fizzbuzz se visualice en el navegador el resultado
//Realizar un fork del repositorio base y subir la solución a un repositorio de github propio
//Enviar el enlace del repositorio con la solución


const express = require('express');
const app = express();


function generarNumeros(N) {
    const numeros = [];
    for (let i = 1; i <= N; i++) {
        let output = "";
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        numeros.push(output || i);
    }
    return numeros;
}

app.get('/fizzbuzz/:N', (req, res) => {
    const N = parseInt(req.params.N);
    const numeros = generarNumeros(N);
    const respuesta = `${numeros.join('<br>')}`;
    res.send(respuesta);
});

app.listen(3000, () =>{
    console.log('Servidor iniciado en el puerto 3000');
})