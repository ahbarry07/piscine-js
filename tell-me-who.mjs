
import {readdir} from 'fs/promises'
import { argv } from 'process';

async function tellMeWho(dirPath){

    let array = []
    const content = readdir(dirPath)
    content.then((data) =>{
        data.forEach(file => {
            const split1 = file.split('.')
            const fileName = split1[0]
            const split2 = fileName.split('_')
            const name =  `${split2[0]} ${split2[1]}`
            array.push(name)
        });
        array.sort()
    
        array.forEach((value, index) => {
            console.log(`${index+1}. ${value}`)
        });
    })
}

tellMeWho(process.argv[2])