
function every(array, func){
    let compt = 0
    for (let i = 0; i < array.length; i++){
         if (func(array[i], i, array)) compt ++
    }
    return compt === array.length
}

function some(array, func){
    let compt = 0
    for (let i = 0; i < array.length; i++){
         if (func(array[i], i, array)) compt ++
    }
    return compt > 0
}

function none(array, func){
    let compt = 0
    for (let i = 0; i < array.length; i++){
         if (func(array[i], i, array)) compt ++
    }
    return compt === 0
}