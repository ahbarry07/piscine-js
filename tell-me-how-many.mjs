import { argv, argv0 } from 'node:process'
import {readdir} from 'fs/promises'

function tellMeHowMany(path){

    let contennt = readdir(path, 'utf-8')
    return contennt.length
}

if (argv.length === 0){
    const currentRepetory = __dirname
    console.log(tellMeHowMany(currentRepetory))
}else{
    argv.forEach((val, index) => {
        if (index === 2){
            console.log(tellMeHowMany(val))
        }
    });
}