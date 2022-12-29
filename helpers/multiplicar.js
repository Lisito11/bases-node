const fs = require('fs');
const colors = require('colors');

const createFile = async (num = 5, listar=false, limit=12) => {

    console.clear();
   

    let salida = '';

    for (let index = 1; index <= limit; index++) {
        salida += `${num} ${'x'.green} ${index} ${'='.green} ${index * num}\n`;
    }

    if (listar) {
        console.log('============='.rainbow);
        console.log(`Tabla del ${num}`.green);
        console.log('============='.rainbow);
        console.log(salida);
    }
    
    // fs.writeFileSync(`tabla-${num}.txt`, salida, (err) => {
    //     if (err) throw err;
    //     console.log(`tabla-${num}.txt created.`);
    // })
    
    
    fs.writeFileSync(`./output/tabla-${num}.txt` , salida);
    
    return `tabla-${num}.txt`.rainbow;
}


module.exports = {
    createFile
}