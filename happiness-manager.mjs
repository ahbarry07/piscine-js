import { argv, argv0, stderr } from 'node:process'
import fs from 'fs/promises';
let pathToDirectory = '.'
// let file
let shoppingList = {}
// if (argv.length === 2) {
//     file = await fs.readdir(pathToDirectory)
// } else if (argv.length >= 3) {
//     pathToDirectory = argv[2]
//     file = await fs.readdir(pathToDirectory)
// }
let file = await fs.readdir(argv[2] || __dirname)
let listAgreed = []
for (const value of file) {
    try {
        let guestInvitation = pathToDirectory + '/' + value
        let guestAnswer = await fs.readFile(guestInvitation)
        let toObject = JSON.parse(guestAnswer)
        if (toObject.answer === 'yes') {
            listAgreed.push(toObject)
        }
    } catch (e) { }
}
if (listAgreed.length === 0) {
    console.log('No one is coming.')
} else {
    let drinks = {}
    let foods = {}
    for (let i = 0; i < listAgreed.length; i++) {
        if (drinks.hasOwnProperty(listAgreed[i]['drink'])) {
            drinks[listAgreed[i]['drink']] += 1
        } else {
            drinks[`${listAgreed[i]['drink']}`] = 1
        }
        if (foods.hasOwnProperty(listAgreed[i]['food'])) {
            foods[listAgreed[i]['food']] += 1
        } else {
            foods[`${listAgreed[i]['food']}`] = 1
        }
    }

    for (const bottle in drinks) {
        if (bottle === 'beer') { shoppingList['6-packs-beers'] = Math.ceil(drinks[bottle] / 6) }
        else if (bottle === 'wine') { shoppingList['wine-bottles'] = Math.ceil(drinks[bottle] / 4) }
        else if (bottle === 'water') { shoppingList['water-bottles'] = Math.ceil(drinks[bottle] / 4) }
        else if (bottle === 'soft') { shoppingList['soft-bottles'] = Math.ceil(drinks[bottle] / 4) }
    }

    let potatoes = 0
    let eggplants = 0
    let mushrooms = 0
    let hummus = 0
    let courgettes = 0
    for (const foodie in foods) {
        potatoes += foods[foodie]
        if (foodie === 'veggie' || foodie === 'vegan') {
            eggplants += foods[foodie] / 3
            mushrooms += foods[foodie]
            hummus += foods[foodie] / 3
            courgettes += foods[foodie] / 3

        }

        else if (foodie === 'carnivore') { shoppingList['burgers'] = foods[foodie] }
        else if (foodie === 'fish') { shoppingList['sardines'] = foods[foodie] }
        else if (foodie === 'everything') { shoppingList['kebabs'] = foods[foodie] }
        else if (foodie === 'candies') { shoppingList['candies'] = foods[foodie] }

    }

    if (eggplants !== 0) { shoppingList['eggplants'] = Math.ceil(eggplants) }
    if (mushrooms !== 0) { shoppingList['mushrooms'] = Math.ceil(mushrooms) }
    if (hummus !== 0) { shoppingList['hummus'] = Math.ceil(hummus) }
    if (courgettes !== 0) { shoppingList['courgettes'] = Math.ceil(courgettes) }
    if (potatoes !== 0) { shoppingList['potatoes'] = potatoes }

    (async () => {
        const fileExists = await checkFileExists(argv[3]);
        if (fileExists) {
            await addObjectToFile(argv[3], shoppingList)
        } else {
            try { await fs.writeFile(argv[3], JSON.stringify(shoppingList, null, 2)) }
            catch (e) { stderr.write('') }
        }
    })();
}
async function accessFile(fileName) {
    try {
        const data = await fs.readFile(fileName, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            return {};
        }
        process.exit(1);
    }
}
async function checkFileExists(filePath) {
    try {
        await fs.access(filePath);
        return true; // File exists
    } catch (error) {
        if (error.code === 'ENOENT') {
            return false; // File does not exist
        }
        throw error; // Other error occurred
    }
}
async function addObjectToFile(filePath, newObject) {
    try {
        let existingObject = {}; // Initialize an empty object

        // Check if the file exists
        const fileExists = await fs.access(filePath).then(() => true).catch(() => false);
        // If the file exists, read its contents
        if (fileExists) {
            const existingData = await fs.readFile(filePath, 'utf-8');
            existingObject = JSON.parse(existingData);
        }
        // Merge the existingObject with the newObject
        Object.assign(existingObject, newObject);
        // Write the updated object back to the file
        await fs.writeFile(filePath, JSON.stringify(existingObject, null, 2));
        console.log(`Object added to '${filePath}' successfully.`);
    } catch (error) {
        throw error; // Handle any errors that may occur
    }
}