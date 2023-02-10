import colors from 'colors'
import fs from 'fs'
let salida=""
export const multiplicar=async(valor,imprimirPantalla,limite)=>{
    for(let i=0; i<=limite;i++){
         salida+=(`${i} * ${valor} = ${i *valor}\n`)   
    }
    if(imprimirPantalla){
        console.log(colors.random(salida))
    }
    try {
        await (fs.writeFileSync(`./salida/tabla-${valor}.txt`,salida))
        return `tabla-${valor}.txt`
    } catch (error) {
        throw new Error('No se pudo grabar el archivo')
    }
}

