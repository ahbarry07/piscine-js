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

function reduceKeys(obj, args, add=''){
    const keys = Object.keys(obj)
    let acc = keys[0]
    for(let i = 1; i < keys.length; i++){
        const key = keys[i] 
        acc = args(acc, key, obj[key], obj)
    }
    return acc + add
}
