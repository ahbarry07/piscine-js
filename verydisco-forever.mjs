import { argv } from 'node:process'
import { writeFile } from 'fs/promises';

let contenu 

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
argv.forEach((val, index) => {
    if (index === 2) {
        let parts = val.split(' ')
        parts.forEach((value) => {
            finalWord.push(transfrom(value))
        })
        contenu = finalWord.join(' ')
        writeFile('verydisco-forever.txt', contenu);
    }
})

