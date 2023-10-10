import fs from 'fs/promises';

async function main() {
  const guestDirectory = process.argv[2];
  const shoppingListFile = process.argv[3];
  
  if (!guestDirectory || !shoppingListFile) {
    console.log('Please provide the guest directory and a shopping list file.');
    return;
  }

  const agreedGuests = [];

  try {
    const guestFiles = await fs.readdir(guestDirectory);

    for (const guestFile of guestFiles) {
      const guestPath = `${guestDirectory}/${guestFile}`;
      const guestData = await fs.readFile(guestPath, 'utf-8');
      const guest = JSON.parse(guestData);

      if (guest.answer === 'yes') {
        agreedGuests.push(guest);
      }
    }

    if (agreedGuests.length === 0) {
      console.log('No one is coming.');
      return;
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

    shoppingList['potatoes'] = agreedGuests.length;

    const shoppingListData = JSON.stringify(shoppingList, null, 2);
    
    try {
      await fs.writeFile(shoppingListFile, shoppingListData);
      console.log('Shopping list updated successfully.');
    } catch (error) {
      console.error('Error writing to shopping list file:', error);
    }
  } catch (error) {
    console.error('Error reading guest directory:', error);
  }
}

main();
