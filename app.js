const {option} = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const colors = require('colors');
const argv = require('./Config/yargs');

console.clear();

//console.log(process.argv);
console.log(argv);
//console.log('Base de yargs:', argv.b);

//const [ , ,arg3 = 'j = 5'] = process.argv; //estamos tomando el tercer argumento
//const [ ,j] = arg3.split('='); //separa el string por el caracter =

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch( err => console.log(err));