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
    let acc = Object.keys(obj)[0]
    for(let key in obj){
        if (acc !==key)  acc = args(acc, key, obj[key], obj)
    }
    return acc + add
}
