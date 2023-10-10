import { Buffer } from 'node:buffer';
import { argv } from 'node:process'
import { writeFile, readFile} from 'fs/promises';
let listGuest = await readFile(argv[2], 'utf8')
let destinationFile = ""
// console.log(listGuest)
if (argv[3] === 'encode') {
    var stringInBase64 = Buffer.from(listGuest).toString('base64')
    argv.length >= 5 ? destinationFile = argv[4] : destinationFile = 'cypher.txt'
    // console.log(stringInBase64)
    await writeFile(destinationFile, stringInBase64);
}
if (argv[3] === 'decode') {
    var stringFromBase64 = Buffer.from(listGuest, 'base64').toString('utf8')
    argv.length >= 5 ? destinationFile = argv[4] : destinationFile = 'clear.txt'
    
    // console.log(stringFromBase64)
    await writeFile(destinationFile, stringFromBase64);
}