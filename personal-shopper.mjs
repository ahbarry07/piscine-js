import { readFile, writeFile, unlink } from 'fs/promises';
import { argv } from 'process';

// Fonction pour lire le contenu du fichier JSON
async function readShoppingList(filePath) {
    try {
        const fileData = await readFile(filePath, 'utf-8');
        return JSON.parse(fileData);
    } catch (error) {
        // Si le fichier n'existe pas, retourne une liste de courses vide
        return {};
    }
}

// Fonction pour écrire la liste de courses dans le fichier JSON
async function writeShoppingList(filePath, shoppingList) {
    await writeFile(filePath, JSON.stringify(shoppingList, null, 2), 'utf-8');
}

// Fonction pour gérer les opérations d'ajout, de suppression et de listing
async function manageShoppingList(filePath, command, elem, num = 1) {
    let shoppingList = await readShoppingList(filePath);

    switch (command) {
        case 'add':
            if (!elem) {
                console.error('Erreur : No elem specified..');
                return;
            }
            shoppingList[elem] = (shoppingList[elem] || 0) + num;
            break;

        case 'rm':
            if (!elem) {
                console.error('Erreur : No elem specified..');
                return;
            }
            if (isNaN(num)) {
                console.error('Unexpected request: nothing has been removed');
                return;
            }
            if (shoppingList[elem] !== undefined) {
                shoppingList[elem] = Math.max(0, shoppingList[elem] - num);
                if (shoppingList[elem] === 0) {
                    delete shoppingList[elem];
                }
            }
            break;

        case 'delete':
            await unlink(filePath);
            console.log(`Fichier ${filePath} supprimé.`);
            return;

        case 'ls':
            if (Object.keys(shoppingList).length === 0) {
                console.log('Empty list.');
                return;
            }
            Object.keys(shoppingList).forEach((item, index) => {
                console.log(`- ${item} (${shoppingList[item]})`);
            });
            return;

        case 'help':
            console.log('Commandes disponibles :');
            console.log('- create <nom_fichier.json> : Crée un fichier JSON de liste de courses.');
            console.log('- delete <nom_fichier.json> : Supprime le fichier JSON de liste de courses.');
            console.log('- add <élément> [quantité] : Ajoute un élément à la liste de courses.');
            console.log('- rm <élément> [quantité] : Supprime un élément de la liste de courses.');
            console.log('- ls : Affiche la liste de courses.');
            console.log('- help : Affiche cette aide.');
            return;

        default:
            console.error('Commande non reconnue. Utilisez "help" pour voir la liste des commandes disponibles.');
            return;
    }

    await writeShoppingList(filePath, shoppingList);
    console.log(`Liste de courses mise à jour :`);
    Object.keys(shoppingList).forEach((item, index) => {
        console.log(`- ${item} (${shoppingList[item]})`);
    });
}

// Récupérer les arguments de la ligne de commande
const filePath = process.argv[2];
console.log(filePath)
// Vérifier s'il y a suffisamment d'arguments
if (process.argv.length < 3) {
    console.error('Erreur :No elem specified.');
    process.exit(1);
}

// Extraire la commande et les arguments
const command = process.argv[3];
const elem = process.argv[4];
const num = parseInt(process.argv[5]);

// Gérer la liste de courses en fonction de la commande
manageShoppingList(filePath, command, elem, num);
