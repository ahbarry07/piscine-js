import {readFile, readdir} from 'fs/promises'

const regexp = /^OUI$/
function tellMeVip(dirPath){
    const files = readdir(dirPath, 'utf-8')
    files.then((fileNames) =>{
        const content = readFile(fileNames, 'utf-8')
        content.then((data) =>{
            let yes = data.filter((value) => regexp.test(value))
            yes.forEach((val, index) =>{
                console.log(`${index+1}. ${val}`)
            })
        })
    })
}

tellMeVip(process.argv[2])