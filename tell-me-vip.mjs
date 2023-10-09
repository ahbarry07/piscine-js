import {readFile} from 'fs/promises'

const regexp = /^OUI$/
function tellMeVip(fileName){
    const content = readFile(fileName)

    content.then((data) =>{
        let yes = data.filter((value) => regexp.test(value))
        yes.forEach((val, index) =>{
            console.log(`${index+1}. ${val}`)
        })
    })
}

tellMeVip(process.argv[2])