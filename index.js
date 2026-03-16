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



/*EJERCICIO 2
import { sumar, restar, dividir, multiplicarPI } from "./src/modules/matematica.js"
console.log(sumar(2,3));
console.log(restar(3,1));
console.log(multiplicarPI(2));
console.log(dividir(2,3));

/*EJERCICIO 3
import Alumno  from "./src/models/alumno.js";
const alumno1 = new Alumno ("facu",12345);
const alumno2 = new Alumno ("nao", 4933849);

console.log(`Username: ${alumno1.username}, DNI: ${alumno1.dni}`);
console.log(`Username: ${alumno2.username}, DNI: ${alumno2.dni}`);

/*EJERCICIO 4
import { copiar } from "./ej4.js";
import fs from 'fs';
copiar("./entrada.txt", "./salida.txt")
console.log(fs.readFileSync('./salida.txt', 'utf-8'))
*/

import { parsearUrl } from "./ejercicio5.js";
console.log (parsearUrl('https://campus.ort.edu.ar/secundaria/almagro/informatica/articulo/2342516/modulos-en-node'));