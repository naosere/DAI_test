/*console.log("hola");

import fs from 'fs';
fs.writeFileSync('archivo.txt', 'Hola, este es un archivo de texto');
console.log('Archivo creado exitosamente');

const contenido = fs.readFileSync('archivo.txt', 'utf-8');
console.log('Contenido del archivo:', contenido);


import saludar from './saludo.js';
const mensaje = saludar('Manuuuuu');
console.log(mensaje);

import cowsay from 'cowsay';

const mensajeSegundo = cowsay.say({
    text: 'Hola, soy una vaca que habla!',
    e: 'oO',
    T: 'U '
});
console.log(mensajeSegundo);
*/

import { sumar, restar, dividir, multiplicarPI } from "./ejercicio2.js"

console.log(sumar(2,3));
console.log(restar(3,1));
console.log(multiplicarPI(2));
console.log(dividir(2,3));