
function filter(array, func){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        if (func(array[i], i, array)){
            newArray.push(array[i])
        }
    }
    return newArray
}

function reject(array, func){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        if (!func(array[i], i, array)){
            newArray.push(array[i])
        }
    }
    return newArray
}

function partition(array, func){
    let trueArray = []
    let falseArray = []
    for(let i = 0; i < array.length; i++){
        if (func(array[i], i, array)){
            trueArray.push(array[i])
        }else{
            falseArray.push(array[i])
        }
    }
    return [trueArray, falseArray]
}