import { readFile, writeFile} from 'fs/promises';
import { argv } from 'process';

const personalShopper = (fileName, command, elem, quantity) => {
    const filePath = `./${fileName}`;

    // Create the file if it doesn't exist
    if (!exists(filePath) && command === 'create') {
        writeFile(filePath, '{}');
    }

    // Read the file contents
    const fileContents = readFile(filePath, 'utf8');
    const shoppingList = JSON.parse(fileContents);

    // Execute the command
    switch (command) {
        case 'add':
            if (!elem) {
                console.error('No elem specified.');
                return;
            }

            if (shoppingList[elem]) {
                shoppingList[elem] += quantity || 1;
            } else {
                shoppingList[elem] = quantity || 1;
            }

            break;
        case 'rm':
            if (!elem) {
                console.error('No elem specified.');
                return;
            }

            if (shoppingList[elem]) {
                if (quantity) {
                    shoppingList[elem] -= quantity;

                    if (shoppingList[elem] <= 0) {
                        delete shoppingList[elem];
                    }
                } else {
                    delete shoppingList[elem];
                }
            }

            break;
        case 'ls':
            if (Object.keys(shoppingList).length === 0) {
                console.log('Empty list.');
                return;
            }

            for (const [key, value] of Object.entries(shoppingList)) {
                console.log(`- ${key} (${value})`);
            }

            break;
        case 'help':
            console.log('Commands:');
            console.log('  - create: takes a filename as argument and create it (should have `.json` extension specified)');
            console.log('  - delete: takes a filename as argument and delete it');
            console.log('  - add: takes an element name as argument and add it to the shopping list');
            console.log('  - rm: takes an element name as argument and remove it from the shopping list');
            console.log('  - ls: list the shopping list');
            console.log('  - help: print this help message');

            break;
        default:
            console.log('Invalid command.');
            return;
    }

    // Write the file back to disk
    writeFile(filePath, JSON.stringify(shoppingList, null, 2));
};

const fileName = process.argv[2];
const command = process.argv[3];
const elem = process.argv[4];
const quantity = Number(process.argv[5]);

personalShopper(fileName, command, elem, quantity);