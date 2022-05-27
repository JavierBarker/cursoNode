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
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

console.log(getNotes());

console.log(validator.isURL('http://email.com'));

/*console.log(
  chalk.green(
    'I am a green line ' +
      chalk.blue.underline.bold('with a blue substring') +
      ' that becomes green again!'
  )
);*/
// con la bandera -g es para indicar que el modulo se va a instalar de manera global

yargs.command({
  command: 'add',
  describe: 'Add note',
  handler: function () {
    console.log('adding a new note');
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('removing note');
  },
});

yargs.command({
  command: 'list',
  describe: 'List Notes',
  handler: function () {
    console.log('list notes');
  },
});

yargs.command({
  command: 'read',
  describe: 'read note',
  handler: function () {
    console.log('reading note');
  },
});
//para ver los comandos se tiene usa el 'node app.js --help'
console.log(yargs.argv);
