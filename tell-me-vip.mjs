import { argv } from 'node:process'
import { writeFile, readFile, readdir } from 'fs/promises';
let pathToDirectory = '.'
let file
if (argv.length === 2) {
    file = await readdir(pathToDirectory)
} else if (argv.length >= 3) {
    pathToDirectory = argv[2]
    file = await readdir(pathToDirectory)
}
let listAgreed = []
for (const value of file) {
    try{
        let guestInvitation = pathToDirectory + '/' + value
        let guestAnswer = await readFile(guestInvitation)
        let toObject = JSON.parse(guestAnswer)
        if (toObject.answer === 'yes') {
            listAgreed.push(value)
        }
    }catch (e) {
       
    }
}

let listGuest = []
listAgreed.forEach(async element => {
    element = element.replace('.json', '').split('_')
    listGuest.push(element)
});
// }
listGuest.sort((a, b) => {if ( a[1] < b[1] ){ return -1; } if ( a[1] > b[1] ){ return 1; } return 0; })
let finalList = []
listGuest.forEach((val, index) => {
    finalList.push(`${index+1}. ${val[1]} ${val[0]}`)
})

await writeFile("vip.txt", finalList.join('\n'));