
function map(array, func){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(func(array[i], i, array))
    }

    return newArray
}

function flatMap(array, func){

    let newArray = []
    for (let i = 0; i < array.length; i++){
        let stock = func(array[i], i, array)
        newArray.push(...stock)
    }
    return newArray
}


  