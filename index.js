/*EJERCICIO 2*/
import { sumar, restar, dividir, multiplicarPI } from "./src/modules/matematica.js"
console.log(sumar(2,3));
console.log(restar(3,1));
console.log(multiplicarPI(2));
console.log(dividir(2,3));

/*EJERCICIO 3*/
import Alumno  from "./src/models/alumno.js";
const alumno1 = new Alumno ("facu",12345);
const alumno2 = new Alumno ("nao", 4933849);

console.log(`Username: ${alumno1.username}, DNI: ${alumno1.dni}`);
console.log(`Username: ${alumno2.username}, DNI: ${alumno2.dni}`);

/*EJERCICIO 4*/
import { copiar } from "./ejercicio4.js";
import fs from 'fs';
copiar("./entrada.txt", "./salida.txt")
console.log(fs.readFileSync('./salida.txt', 'utf-8'))

/*EJERCICIO 5*/

import { parsearUrl } from "./ejercicio5.js";
console.log (parsearUrl('https://campus.ort.edu.ar/secundaria/almagro/informatica/articulo/2342516/modulos-en-node'));

/*EJERCICIO 6*/
import { parsearUrl2 } from "./ejercicio6.js";
console.log (parsearUrl2('https://campus.ort.edu.ar/secundaria/almagro/informatica/articulo/2342516/modulos-en-node')); //
console.log (parsearUrl2('casa'));

/*EJERCICIO 7*/
import { convertirMoneda } from "./ejercicio7.js";
console.log(convertirMoneda('BR'));