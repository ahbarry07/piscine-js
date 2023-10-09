
import { argv } from 'node:process'
import { readFile } from 'fs/promises';

let finalWord = []
const transfrom = (word) => {
    let newWord = ""
    let sizing = (Math.round(word.length/2))
    for (let i = sizing; i < word.length; i++) {
        newWord += word[i]
    }
    for (let j = 0; j < sizing; j++) {
        newWord += word[j]
    }
    return newWord
}

function readAndTransform(filename){
    let result 
    readFile(filename, 'utf-8', (err, data) =>{
        if (err) {
            console.error('Erreur lors de la lecture du fichier')
            return
        }
       result = data
    })
    return result
}


argv.forEach((val, index) => {
    if (index === 2) {
        let content = readAndTransform(val)
        let parts = content.split(' ')
        parts.forEach((value) => {
            finalWord.push(transfrom(value))
        })

        console.log(finalWord.join(' '))
    }
})
