
function every(array, func){
    let count = 0
    for (let i = 0; i < array.length; i++){
         if (func(array[i], i, array)) count ++
    }
    if (count === array.length) return true
}

function some(array, func){
    let count = 0
    for (let i = 0; i < array.length; i++){
         if (func(array[i], i, array)) count ++
    }
    if (count !== 0) return true
}

function none(array, func){
    let count = 0
    for (let i = 0; i < array.length; i++){
         if (func(array[i], i, array)) count ++
    }
    if (count === 0) return true
}