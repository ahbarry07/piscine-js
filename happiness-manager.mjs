import { argv, argv0, stderr } from 'node:process';
import fs from 'fs/promises';

const getShoppingList = async (pathToDirectory) => {
  const files = await fs.readdir(pathToDirectory);
  const listAgreed = [];

  for (const file of files) {
    try {
      const guestInvitation = `${pathToDirectory}/${file}`;
      const guestAnswer = await fs.readFile(guestInvitation);
      const toObject = JSON.parse(guestAnswer);

      if (toObject.answer === 'yes') {
        listAgreed.push(toObject);
      }
    } catch (e) {
      console.log(e);
    }
  }

  if (!listAgreed.length) {
    return {};
  }

  const drinks = {};
  const foods = {};

  for (const guest of listAgreed) {
    drinks[guest.drink] = Math.ceil(drinks[guest.drink] || 0) + 1;
    foods[guest.food] = Math.ceil(foods[guest.food] || 0) + 1;
  }

  const shoppingList = {
    drinks: Object.keys(drinks).reduce((acc, drink) => ({
      ...acc,
      [drink]: drinks[drink] > 6 ? Math.ceil(drinks[drink] / 6) : drinks[drink],
    }), {}),
    foods: Object.keys(foods).reduce((acc, food) => ({
      ...acc,
      [food]: foods[food] > 3 ? Math.ceil(foods[food] / 3) : foods[food],
    }), {}),
    potatoes: listAgreed.length,
  };

  return shoppingList;
};

const saveShoppingList = async (shoppingList, filePath) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(shoppingList, null, 2));
  } catch (e) {
    console.log(e);
    stderr.write('');
  }
};

const main = async () => {
  const pathToDirectory = argv[2] || '.';
  const filePath = argv[3];

  const shoppingList = await getShoppingList(pathToDirectory);

  if (!filePath) {
    console.log(shoppingList);
  } else {
    await saveShoppingList(shoppingList, filePath);
  }
};

main();
