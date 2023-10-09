
import {readdir} from 'fs/promises'
import { argv } from 'process';

function sortName(a, b) {
    // Divisez chaque chaîne en mots
    const prenomA = a.split(" ")[0];
    const prenomB = b.split(" ")[0];
  
    // Comparez les prénoms de manière insensible à la casse
    return prenomA.localeCompare(prenomB, undefined, { sensitivity: 'base' });
  }


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
        array.sort(sortName)
    
        array.forEach((value, index) => {
            console.log(`${index+1}. ${value[1]} ${value[0]}`)
        });
    })
}

tellMeWho(process.argv[2])