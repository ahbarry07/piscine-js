
import {readdir} from 'fs/promises'
import { argv } from 'process';

async function tellMeWho(dirPath){

    const content = readdir(dirPath, 'utf-8')
    split.sort()

    split.forEach((file, index) => {
        console.log(`${index+1}. ${file}`)
    });
}

tellMeWho(process.argv[2])