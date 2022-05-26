/*node tiene una amplia lista de modulos para poder usar
hay modulos que no se tienen que llamar por lo que ya esta puestos de manera universal, entonces 
hay modulos que no son instanciados pero estan integrados en node y se tienen que llamar, todo se tiene que llamar
ya sea un modulo, un archivo instalado por npm, un archivo creado etc*/

//const fs = require('fs');

//fs.writeFileSync('notes.txt', 'esto es un archivo con Node Js');

//fs.appendFileSync('notes.txt', 'este es un nuevo texto');

/*const add = require('./utils.js');

const sum = add(4, -2);
console.log(sum);*/

const getNotes = require('./notes.js');

console.log(getNotes());
