import { sign } from 'node:crypto';
import { argv } from 'node:process'
import { workerData } from 'node:worker_threads';
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
        // console.log(finalWord.join(' '))
    }
})


async function veryDiscoForever() {
  try {
    // Écrire le contenu dans un fichier
    await fs.writeFile('verydisco-forever.txt', contenu);
  } catch (err) {
    console.error("Erreur lors de l'écriture dans verydisco-forever.txt : ", err);
  }
}

veryDiscoForever();

// Erreur : code déjà échoué lors de la validation 67caa7d Sortie
// précédente : échec du test n°1 : async ({ ctx, eq }) => {
// const { data } = wait ctx.run(`discovery`) return eq(data, 'verydisco') 
// } Erreur : ENOENT : aucun fichier ou répertoire de ce type, ouvrez 'verydisco-forever.txt'