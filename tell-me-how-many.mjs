import { argv, argv0 } from 'node:process'
import {readdir} from 'fs/promises'

function tellMeHowMany(path){

    let content = readdir(path, 'utf-8')
    console.log(content)
    return 9
}

if (argv.length === 0){
    const currentRepetory = __dirname
    const result = tellMeHowMany(currentRepetory)
    console.log(result)
    console.log(1)
}else{
    argv.forEach((val, index) => {
        if (index === 2){
            let result = tellMeHowMany(val)
            console.log(result)
            console.log(2)
        }
    });
}