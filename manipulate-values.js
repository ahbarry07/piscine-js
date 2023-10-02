
function filterValues(obj, args){
    let resultObj = {}
    for (let key in obj){
        if(args(obj[key], key, obj)){
            resultObj[key] = obj[key]
        } 
    }
    return resultObj
}

function mapValues(obj, args){
    let resultObj = {}
    for (let key in obj){
        resultObj[key] = args(obj[key], key, obj)   
    }
    return resultObj
}

function reduceValues(obj, args){
    let acc = Object.values(obj)[0]
    for(let key in obj){
        acc = args(acc, obj[key], key, obj) 
    }
    return acc - Object.values(obj)[0]
}
