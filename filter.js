
function filter(array, func){
    let newArray = []
    for(let value of array){
        if (func(value)){
            newArray.push(value)
        }
    }
    return newArray
}

function reject(array, func){
    let newArray = []
    for(let value of array){
        if (!func(value)){
            newArray.push(value)
        }
    }
    return newArray
}

function partition(array, func){
    let trueArray = []
    let falseArray = []
    for(let value of array){
        if (func(value)){
            trueArray.push(value)
        }else{
            falseArray.push(value)
        }
    }
    return [trueArray, falseArray]
}