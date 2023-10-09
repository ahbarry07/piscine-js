
import {readdir} from 'fs/promises'
import { argv } from 'process';

async function tellMeWho(dirPath){

    let array = []
    const content = readdir(dirPath)
    content.then((data) =>{
        data.forEach(file => {
            array.push(file)
        });
        array.sort()
    
        array.forEach((value, index) => {
            console.log(`${index+1}. ${value}`)
        });
    })
}

tellMeWho(process.argv[2])