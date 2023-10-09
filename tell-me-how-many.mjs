import { argv, argv0 } from 'node:process'
import {readdir} from 'fs/promises'

async function tellMeHowMany(path){

    let content = await readdir(path)
   
   console.log(content.length)
}

const directoryPath = process.argv[2] || __dirname

tellMeHowMany(directoryPath)