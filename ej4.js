import fs from 'fs';
function copiar(){
const contenido = fs.readFileSync('entrada.txt', 'utf-8');
fs.writeFileSync('salida.txt', contenido);
}

export {copiar};