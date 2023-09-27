
function every(array, func){
    let count = 0
    for (let i = 0; i < array.length; i++){
         if (func(array[i], i, array)) count ++
    }
    return count === array.length
}

function some(array, func){
    let count = 0
    for (let i = 0; i < array.length; i++){
         if (func(array[i], i, array)) count ++
    }
    return count !== 0
}

function none(array, func){
    let count = 0
    for (let i = 0; i < array.length; i++){
         if (func(array[i], i, array)) count ++
    }
    return count === 0
}