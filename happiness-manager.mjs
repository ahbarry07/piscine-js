import fs from 'fs/promises';

async function main() {
  try {
    const guestDirectory = process.argv[2];
    const shoppingListFile = process.argv[3];

    if (!guestDirectory || !shoppingListFile) {
      console.log('Veuillez fournir le répertoire des invités et le fichier de liste de courses.');
      return;
    }

    const guestFiles = await fs.readdir(guestDirectory);
    const agreedGuests = await getAgreedGuests(guestFiles, guestDirectory);

    if (agreedGuests.length === 0) {
      console.log('Personne ne vient.');
      return;
    }

    const shoppingList = createShoppingList(agreedGuests);

    await saveShoppingList(shoppingList, shoppingListFile);

    console.log('Liste de courses mise à jour avec succès.');
  } catch (error) {
    console.error('Erreur :', error);
  }
}

async function getAgreedGuests(guestFiles, guestDirectory) {
  const agreedGuests = [];

  for (const guestFile of guestFiles) {
    try {
      const guestPath = `${guestDirectory}/${guestFile}`;
      const guestData = await fs.readFile(guestPath, 'utf-8');
      const guest = JSON.parse(guestData);

      if (guest.answer === 'yes') {
        agreedGuests.push(guest);
      }
    } catch (error) {}
  }

  return agreedGuests;
}

function createShoppingList(agreedGuests) {
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
    'potatoes': agreedGuests.length,
  };

  agreedGuests.forEach((guest) => {
    if (guest.drink && guest.drink !== 'no preference') {
      const drinkCategory = guest.drink.toLowerCase();
      shoppingList[`${drinkCategory}-bottles`] = (shoppingList[`${drinkCategory}-bottles`] || 0) + 1;
    }

    if (guest.food && guest.food !== 'no preference') {
      const foodCategory = guest.food.toLowerCase();
      if (foodCategory === 'veggie' || foodCategory === 'vegan') {
        shoppingList['eggplants'] += 1 / 3;
        shoppingList['mushrooms'] += 1;
        shoppingList['hummus'] += 1 / 3;
        shoppingList['courgettes'] += 1 / 3;
      } else {
        shoppingList[foodCategory] = (shoppingList[foodCategory] || 0) + 1;
      }
    }
  });

  return shoppingList;
}

async function saveShoppingList(shoppingList, shoppingListFile) {
  try {
    const shoppingListData = JSON.stringify(shoppingList, null, 2);
    await fs.writeFile(shoppingListFile, shoppingListData);
  } catch (error) {
    throw error;
  }
}

main();
