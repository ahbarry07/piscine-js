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
    if (arguments.length === 2){
        initialValue = ''
        const keys = Object.keys(obj)
        let accumulator = keys[0]
        for(let i = 1; i < keys.length; i++){
            const key = keys[i] 
            accumulator = reducer(accumulator, key, obj[key], obj)
        }
        return  accumulator 
    }else{

        accumulator = initialValue;
        for (const key in obj) {
            accumulator = reducer(accumulator, key, obj[key]);
        }
        return accumulator;
    }
}
