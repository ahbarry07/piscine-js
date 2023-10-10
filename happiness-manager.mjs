import fs from 'fs';

const happinessManager = (guestDir, shoppingListFile) => {
  // Read the guest directory
  const guests = fs.readdirSync(guestDir);

  // Filter out the non-VIP guests
  const vipGuests = guests.filter((guest) => guest.includes('vip'));

  // Check if there are any VIP guests
  if (vipGuests.length === 0) {
    console.log('No one is coming.');
    return;
  }

  // Create an empty shopping list
  const shoppingList = {};

  // Iterate over the VIP guests and add their drink and food choices to the shopping list
  for (const vipGuest of vipGuests) {
    // Read the VIP guest's answers file
    const vipGuestAnswers = fs.readFileSync(`${guestDir}/${vipGuest}/answers.json`, 'utf8');
    const vipGuestData = JSON.parse(vipGuestAnswers);

    // Add the VIP guest's drink choice to the shopping list
    const drinkChoice = vipGuestData.drink;
    const drinkQuantity = Math.ceil(vipGuests.length / 6);

    if (drinkChoice === 'beers') {
      shoppingList['6-packs-beers'] = drinkQuantity;
    } else if (drinkChoice === 'water' || drinkChoice === 'wine' || drinkChoice === 'softs') {
      shoppingList[`${drinkChoice}-bottles`] = Math.ceil(vipGuests.length / 4);
    }

    // Add the VIP guest's food choice to the shopping list
    const foodChoice = vipGuestData.food;
    const foodQuantity = vipGuests.length;

    if (foodChoice === 'veggies and vegans') {
      shoppingList['eggplants'] = foodQuantity;
      shoppingList['mushrooms'] = foodQuantity;
      shoppingList['hummus'] = foodQuantity;
      shoppingList['courgettes'] = foodQuantity;
    } else if (foodChoice === 'carnivores') {
      shoppingList['burgers'] = foodQuantity;
    } else if (foodChoice === 'fish lovers') {
      shoppingList['sardines'] = foodQuantity;
    } else if (foodChoice === 'omnivores') {
      shoppingList['kebabs'] = foodQuantity;
    }
  }

  // Add potatoes to the shopping list
  shoppingList['potatoes'] = vipGuests.length;

  // Write the shopping list to the file
  fs.writeFileSync(shoppingListFile, JSON.stringify(shoppingList, null, 2));
};

const guestDir = process.argv[2];
const shoppingListFile = process.argv[3];

happinessManager(guestDir, shoppingListFile);

const shoppingList= {
    "6-packs-beers": 2,
    "water-bottles": 1,
    "wine-bottles": 1,
    "eggplants": 3,
    "mushrooms": 3,
    "hummus": 3,
    "courgettes": 3,
    "burgers": 3,
    "sardines": 3,
    "kebabs": 3,
    "potatoes": 3
  }