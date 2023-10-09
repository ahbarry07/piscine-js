
import {readdir} from 'fs/promises'
import { argv } from 'process';


async function tellMeWho(dirPath){

    let array = []
    const content = readdir(dirPath, 'utf-8')
    content.then((data) =>{
        data.forEach(file => {
            const split1 = file.split('.')
            const fileName = split1[0]
            const split2 = fileName.split('_')
            array.push(split2)
        });
        array.sort((a, b) => {if ( a[1] < b[1] ){ return -1; } if ( a[1] > b[1] ){ return 1; } return 0; })
    
        array.forEach((value, index) => {
            console.log(`${index+1}. ${value[1]} ${value[0]}`)
        });
    })
}

tellMeWho(process.argv[2])