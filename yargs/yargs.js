import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
export const argv = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description:"La base es el numero del cual se hara la tabla de multiplicar"
    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        default:false,
        description:"Muestra la tabla de multiplicar"
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default:10,
        description:'Limite de la multiplicacion'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        }
        if(isNaN(argv.h)){
            throw 'El limite tiene que ser un numero'
        }
        return true;
    })
    .argv