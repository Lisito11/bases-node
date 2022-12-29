const {createFile} = require('./helpers/multiplicar')

const argv = require('./config/yargs')
console.log(argv);
const { base, listar, limit } = argv;

createFile(base, listar, limit)
.then( (file) => console.log(`${file} created.`) )
.catch( (err) => console.log(err) );


