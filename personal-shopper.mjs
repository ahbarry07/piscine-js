import { argv, stderr } from 'node:process';
import fs from 'fs/promises';

async function main() {
  const shoppingListFile = argv[2];

  if (!shoppingListFile) {
    stderr.write('Please provide a shopping list file.\n');
    process.exit(1);
  }

  let shoppingListData = {};

  if (argv.length === 3) {
    await displayHelp();
  } else if (argv.length >= 4) {
    switch (argv[3]) {
      case 'create':
        try {
          await createFile(shoppingListFile);
        } catch (e) {
          stderr.write('');
        }
        break;

      case 'delete':
        try {
          await deleteFile(shoppingListFile);
        } catch (e) {
          process.exit(0);
        }
        break;

      case 'add':
        if (argv.length < 5) {
          stderr.write('No elem specified.\n');
        } else {
          try {
            const itemName = argv[4];
            let quantity = 1;

            if (!isNaN(argv[5])) {
              quantity = Number(argv[5]);
            }

            shoppingListData = await readShoppingListFile(shoppingListFile);

            if (shoppingListData.hasOwnProperty(itemName)) {
              shoppingListData[itemName] += quantity;
            } else {
              shoppingListData[itemName] = quantity;
            }

            if (shoppingListData[itemName] <= 0) {
              delete shoppingListData[itemName];
            }

            await writeShoppingListFile(shoppingListFile, shoppingListData);
          } catch (err) {}
        }
        break;

      case 'rm':
        if (argv.length < 5) {
          stderr.write('No elem specified.\n');
        } else {
          try {
            const itemName = argv[4];
            let quantity = 0;

            if (!isNaN(argv[5])) {
              quantity = Number(argv[5]);
            }

            shoppingListData = await readShoppingListFile(shoppingListFile);

            if (shoppingListData.hasOwnProperty(itemName)) {
              if (argv.length < 6) {
                delete shoppingListData[itemName];
              } else {
                shoppingListData[itemName] -= quantity;
              }
            } else {
              shoppingListData[itemName] = quantity;
            }

            if (shoppingListData[itemName] === 0) {
              delete shoppingListData[itemName];
            }

            if (shoppingListData[itemName] < 0) {
              shoppingListData[itemName] = Math.abs(shoppingListData[itemName]);
            }

            await writeShoppingListFile(shoppingListFile, shoppingListData);
          } catch (err) {}
        }
        break;

      case 'help':
        await displayHelp();
        break;

      case 'ls':
        shoppingListData = await readShoppingListFile(shoppingListFile);

        if (Object.entries(shoppingListData).length === 0) {
          console.log('Empty list.');
        } else {
          let listing = Object.entries(shoppingListData);

          for (const [key, value] of listing) {
            console.log(`- ${key} (${value})`);
          }
        }
        break;

      default:
        stderr.write('Invalid command. Use "help" to see available commands.\n');
    }
  }
}

async function displayHelp() {
  console.log('Commands:');
  console.log('- create: takes a filename as argument and create it (should have `.json` extension specified');
  console.log('- delete: takes a filename as argument and delete it');
  console.log('- add: takes a filename as argument and add a new element to the list in the file');
  console.log('- rm: takes a filename as argument and remove an element from the list in the file');
  console.log('- help: print all the command lines available');
  console.log('- ls: takes a filename as first argument and print the list in the console');
}

async function createFile(fileName) {
  try {
    await fs.writeFile(fileName, '{}');
  } catch (e) {
    stderr.write('');
  }
}

async function deleteFile(fileName) {
  try {
    await fs.unlink(fileName);
  } catch (e) {
    process.exit(0);
  }
}

async function readShoppingListFile(fileName) {
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

async function writeShoppingListFile(fileName, data) {
  await fs.writeFile(fileName, JSON.stringify(data, null, 2));
}

main();
