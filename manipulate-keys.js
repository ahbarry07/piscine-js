function filterKeys(obj, args){
    let resultObj = {}
    for(let key in obj){
        if (args(key, obj[key], obj)){
            resultObj[key] = obj[key]
        }
    }
    return resultObj
}

function mapKeys(obj, args){
    let resultObj = {}
    for(let key in obj){
        const newKey = args(key, obj[key], obj)
        resultObj[newKey] = obj[key] 
    }
    return resultObj
}

function reduceKeys(obj, reducer, initialValue) {
    let accumulator = initialValue;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        accumulator = reducer(accumulator, key);
      }
    }
    return accumulator;
}
  
const nutrients = {
    'vinegar': 80,
    'sugar': 100,
    'oil': 50,
    'onion': 200,
    'garlic': 22,
    'paprika': 4,
  }

console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// output: { protein: 20 }

console.log(mapKeys(nutrients, (k) => `-${k}`))
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

console.log(reduceKeys(nutrients, (acc, cr) => `${acc}${cr}:`, ':'))
// output: carbohydrates, protein, fat