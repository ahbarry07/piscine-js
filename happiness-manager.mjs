import { argv, stderr } from 'node:process';
import fs from 'fs/promises';

let guestsDirectory = '.';
let shoppingListFile;
let shoppingList = {};

if (argv.length === 2) {
  shoppingListFile = await fs.readdir(guestsDirectory);
} else if (argv.length >= 3) {
  guestsDirectory = argv[2];
  shoppingListFile = await fs.readdir(guestsDirectory);
}

const agreedGuests = [];

for (const guestFile of shoppingListFile) {
  try {
    const guestPath = guestsDirectory + '/' + guestFile;
    const guestAnswerData = await fs.readFile(guestPath);
    const guestAnswer = JSON.parse(guestAnswerData);

    if (guestAnswer.answer === 'yes') {
      agreedGuests.push(guestAnswer);
    }
  } catch (err) {}
}

if (agreedGuests.length === 0) {
  console.log('No one is coming.');
} else {
  const drinkCategories = {};
  const foodCategories = {};

  for (const guest of agreedGuests) {
    if (guest.wantToDrink && guest.drink) {
      const drinkCategory = guest.drink.toLowerCase();

      if (drinkCategory !== 'no preference') {
        if (drinkCategories.hasOwnProperty(drinkCategory)) {
          drinkCategories[drinkCategory] += 1;
        } else {
          drinkCategories[drinkCategory] = 1;
        }
      }
    }

    if (guest.wantToEat && guest.food) {
      const foodCategory = guest.food.toLowerCase();

      if (foodCategory !== 'no preference') {
        if (foodCategories.hasOwnProperty(foodCategory)) {
          foodCategories[foodCategory] += 1;
        } else {
          foodCategories[foodCategory] = 1;
        }
      }
    }
  }

  for (const drinkCategory in drinkCategories) {
    if (drinkCategory === 'beer') {
      shoppingList['6-packs-beers'] = Math.ceil(drinkCategories[drinkCategory] / 6);
    } else if (drinkCategory === 'wine' || drinkCategory === 'water' || drinkCategory === 'soft') {
      shoppingList[`${drinkCategory}-bottles`] = Math.ceil(drinkCategories[drinkCategory] / 4);
    }
  }

  let totalFoodItems = 0;

  for (const foodCategory in foodCategories) {
    totalFoodItems += foodCategories[foodCategory];
  }

  const remainingItems = agreedGuests.length - totalFoodItems;
  const categories = Object.keys(foodCategories).length;

  if (categories > 0) {
    const additionalItemsPerCategory = Math.floor(remainingItems / categories);

    for (const foodCategory in foodCategories) {
      foodCategories[foodCategory] += additionalItemsPerCategory;
    }
  }

  for (const foodCategory in foodCategories) {
    if (foodCategory === 'veggie' || foodCategory === 'vegan') {
      const sharedQuantity = Math.floor(foodCategories[foodCategory] / 3);
      shoppingList['eggplants'] = sharedQuantity;
      shoppingList['mushrooms'] = foodCategories[foodCategory];
      shoppingList['hummus'] = sharedQuantity;
      shoppingList['courgettes'] = sharedQuantity;
    } else if (foodCategory === 'carnivore') {
      shoppingList['burgers'] = foodCategories[foodCategory];
    } else if (foodCategory === 'fish') {
      shoppingList['sardines'] = foodCategories[foodCategory];
    } else if (foodCategory === 'everything') {
      shoppingList['kebabs'] = foodCategories[foodCategory];
    }
  }

  shoppingList['potatoes'] = totalFoodItems;
  
  const shoppingListFilePath = argv[3];

  if (await fileExists(shoppingListFilePath)) {
    await mergeObjectsToFile(shoppingListFilePath, shoppingList);
  } else {
    try {
      await fs.writeFile(shoppingListFilePath, JSON.stringify(shoppingList, null, 2));
    } catch (e) {
      stderr.write('');
    }
  }
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false;
    }
    throw error;
  }
}

async function mergeObjectsToFile(filePath, newObject) {
  try {
    let existingObject = {};

    if (await fileExists(filePath)) {
      const existingData = await fs.readFile(filePath, 'utf-8');
      existingObject = JSON.parse(existingData);
    }

    Object.assign(existingObject, newObject);

    await fs.writeFile(filePath, JSON.stringify(existingObject, null, 2));
  } catch (error) {
    throw error;
  }
}
