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