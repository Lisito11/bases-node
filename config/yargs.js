const argv = require('yargs')
.option('b', {
    alias:'base',
    type: 'number',
    demandOption: true,
    describe: 'Base from table multiplicar'
})
.option('l', {
    alias:'listar',
    type: 'boolean',
    default:false,
    describe: 'Show table in console'
})
.option('h', {
    alias:'limit',
    type: 'number',
    default: 12,
    describe: 'Limit table'
})
.check((argv, options) => {
    if (isNaN(argv.b)) {
        throw 'Base must be a number';
    }
    return true;
})
.argv

// console.log(argv);
// console.log(process.argv);
// const num = 9;


// const [,,arg3='base=5', arg4='limit=10'] = process.argv;
// const [,base] = arg3.split('=')
// const [,limit] = arg4.split('=')

// console.log(base);


module.exports = argv;