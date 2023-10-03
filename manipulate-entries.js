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

const mapEntries = (obj, fn) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => fn([key, value]))
  );

const reduceEntries = (obj, args, initialValue) =>
  initialValue === undefined
    ? Object.entries(obj).reduce((t, [key, value]) => args(t, [key, value]))
    : Object.entries(obj).reduce(
        (t, [key, value]) => args(t, [key, value]),
        initialValue
      );

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

const cartTotal = (obj) => {
  let newObj = {};

  for (const [key, value] of Object.entries(obj)) {
    newObj[key] = mapEntries(nutritionDB[key], ([k, v]) => [
      k,
      parseFloat(((v / 100) * value).toFixed(3)),
    ]);
  }
  return newObj;
};
