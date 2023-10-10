import fs from 'fs/promises';
import path from 'path';

const guestDirectory = process.argv[2];
const shoppingListFile = process.argv[3];

if (!guestDirectory || !shoppingListFile) {
  console.log('Please provide the guest directory and a shopping list file.');
  process.exit(1);
}

const shoppingList = {
  '6-packs-beers': 0,
  'wine-bottles': 0,
  'water-bottles': 0,
  'soft-bottles': 0,
  'eggplants': 0,
  'mushrooms': 0,
  'hummus': 0,
  'courgettes': 0,
  'burgers': 0,
  'sardines': 0,
  'kebabs': 0,
  'potatoes': 0,
};

(async () => {
  try {
    const guests = await readGuestDirectory(guestDirectory);

    if (guests.length === 0) {
      console.log('No one is coming.');
      return;
    }

    for (const guest of guests) {
      if (guest.wantToDrink && guest.drink) {
        const drinkCategory = guest.drink.toLowerCase();
        if (drinkCategory !== 'no preference') {
          shoppingList[`${drinkCategory}-bottles`] += 1;
        }
      }

      if (guest.wantToEat && guest.food) {
        const foodCategory = guest.food.toLowerCase();
        if (foodCategory !== 'no preference') {
          shoppingList[foodCategory] += 1;
        }
      }
    }

    await updateOrCreateShoppingList(shoppingListFile, shoppingList);
    console.log('Shopping list updated successfully.');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
})();

async function readGuestDirectory(directory) {
  const guests = [];
  try {
    const files = await fs.readdir(directory);
    for (const file of files) {
      const filePath = path.join(directory, file);
      const data = await fs.readFile(filePath, 'utf-8');
      const guestInfo = JSON.parse(data);
      guests.push(guestInfo);
    }
  } catch (err) {
    console.error(err.message);
  }
  return guests.filter((guest) => guest.isVIP && guest.isVIP.toLowerCase() === 'yes');
}

async function updateOrCreateShoppingList(filePath, shoppingListData) {
  let existingData = {};

  try {
    if (await fs.access(filePath)) {
      const data = await fs.readFile(filePath, 'utf-8');
      existingData = JSON.parse(data);
    }
  } catch (err) {
    console.error(err.message);
  }

  const updatedShoppingList = { ...existingData, ...shoppingListData };

  await fs.writeFile(filePath, JSON.stringify(updatedShoppingList, null, 2));
}
