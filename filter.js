
function filter(array, func){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        if (func(array[i], i, array)){
            newArray.push(array[i], i, array)
        }
    }
    return newArray
}

function reject(array, func){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        if (!func(array[i], i, array)){
            newArray.push(array[i], i, array)
        }
    }
    return newArray
}

function partition(array, func){
    let trueArray = []
    let falseArray = []
    for(let i = 0; i < array.length; i++){
        if (func(array[i], i, array)){
            trueArray.push(array[i], i, array)
        }else{
            falseArray.push(array[i], i, array)
        }
    }
    return [trueArray, falseArray]
}