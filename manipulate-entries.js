function filterEntries(obj, args) {
  obj = Object.entries(obj);
  let resultObj = {};
  for (const [key, value] of obj) {
    if (args([key, value], args)) {
      resultObj[key] = value;
    }
  }
  return resultObj;
}

function mapEntries(obj, args) {
  obj = Object.entries(obj);
  let resultObj = {};
  for (let [key, value] of obj) {
    resultObj[key] = args([key, value]);
  }
  return resultObj;
}

const reduceEntries = (obj, args, initialValue) =>
  initialValue === undefined
    ? Object.entries(obj).reduce((t, [key, value]) => args(t, [key, value]))
    : Object.entries(obj).reduce((t, [key, value]) => args(t, [key, value]), initialValue);

function totalCalories(obj) {
  return Number(
    reduceEntries(
      obj,
      (acc, curr) => {
        let result = (nutritionDB[curr[0]]["calories"] / 100) * curr[1];
        return acc + result;
      },
      0
    ).toFixed(1)
  );
}

const lowCarbs = (obj) =>
  filterEntries(
    obj,
    (curr) => (nutritionDB[curr[0]]["carbs"] / 100) * curr[1] < 50
  );

const cartTotal = (obj) =>
  mapEntries(obj, (curr) => {
    let newObj = {};
    for (let [key, value] of Object.entries(nutritionDB[curr[0]])) {
      newObj[key] = parseFloat(
        ((nutritionDB[curr[0]][key] / 100) * curr[1]).toFixed(1)
      );
    }
    return newObj;
  });
// const nutritionDB = {
//   tomato: {
//     calories: 18,
//     protein: 0.9,
//     carbs: 3.9,
//     sugar: 2.6,
//     fiber: 1.2,
//     fat: 0.2,
//   },
//   vinegar: {
//     calories: 20,
//     protein: 0.04,
//     carbs: 0.6,
//     sugar: 0.4,
//     fiber: 0,
//     fat: 0,
//   },
//   oil: { calories: 48, protein: 0, carbs: 0, sugar: 123, fiber: 0, fat: 151 },
//   onion: { calories: 0, protein: 1, carbs: 9, sugar: 0, fiber: 0, fat: 0 },
//   garlic: {
//     calories: 149,
//     protein: 6.4,
//     carbs: 33,
//     sugar: 1,
//     fiber: 2.1,
//     fat: 0.5,
//   },
//   paprika: {
//     calories: 282,
//     protein: 14.14,
//     carbs: 53.99,
//     sugar: 1,
//     fiber: 0,
//     fat: 12.89,
//   },
//   sugar: {
//     calories: 387,
//     protein: 0,
//     carbs: 100,
//     sugar: 100,
//     fiber: 0,
//     fat: 0,
//   },
//   orange: {
//     calories: 49,
//     protein: 0.9,
//     carbs: 13,
//     sugar: 9,
//     fiber: 0.2,
//     fat: 0.1,
//   },
// };
// const groceriesCart1 = { oil: 500, onion: 230, garlic: 220, paprika: 480 };
// console.log(
//   reduceEntries(groceriesCart1, (acc, [k, v]) => acc + k + v, "") ===
//     "oil500onion230garlic220paprika480"
// );
