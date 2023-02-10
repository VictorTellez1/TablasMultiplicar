
import { multiplicar } from './multiplica.js'
import { argv } from './yargs/yargs.js'






multiplicar(argv.b,argv.l,argv.h)
    .then(nombreArchivo=>console.log(nombreArchivo,'creado'))
    .catch(err=>console.log(err))

