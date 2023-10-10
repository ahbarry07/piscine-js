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
    } catch (e) {}
  }

  if (listAgreed.length === 0) {
    return {};
  }

  const drinks = {};
  const foods = {};

  for (const guest of listAgreed) {
    if (drinks.hasOwnProperty(guest.drink)) {
      drinks[guest.drink] += 1;
    } else {
      drinks[guest.drink] = 1;
    }

    if (foods.hasOwnProperty(guest.food)) {
      foods[guest.food] += 1;
    } else {
      foods[guest.food] = 1;
    }
  }

  const shoppingList = {};

  for (const drink in drinks) {
    if (drink === 'beer') {
      shoppingList['6-packs-beers'] = Math.ceil(drinks[drink] / 6);
    } else if (drink === 'wine') {
      shoppingList['wine-bottles'] = Math.ceil(drinks[drink] / 4);
    } else if (drink === 'water') {
      shoppingList['water-bottles'] = Math.ceil(drinks[drink] / 4);
    } else if (drink === 'soft') {
      shoppingList['soft-bottles'] = Math.ceil(drinks[drink] / 4);
    }
  }

  for (const food in foods) {
    if (food === 'veggie' || food === 'vegan') {
      shoppingList['eggplants'] = Math.ceil(foods[food] / 3);
      shoppingList['mushrooms'] = foods[food];
      shoppingList['hummus'] = Math.ceil(foods[food] / 3);
      shoppingList['courgettes'] = Math.ceil(foods[food] / 3);
    } else if (food === 'carnivore') {
      shoppingList['burgers'] = foods[food];
    } else if (food === 'fish') {
      shoppingList['sardines'] = foods[food];
    } else if (food === 'everything') {
      shoppingList['kebabs'] = foods[food];
    } else if (food === 'candies') {
      shoppingList['candies'] = foods[food];
    }
  }

  shoppingList['potatoes'] = listAgreed.length;

  return shoppingList;
};

const saveShoppingList = async (shoppingList, filePath) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(shoppingList, null, 2));
  } catch (error) {
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
