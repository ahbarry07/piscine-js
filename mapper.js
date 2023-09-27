
function map(array, func){
    let newArray = []
    for (let i in array){
        newArray.push(func(array[i], i, array))
    }

    return newArray
}

function flatMap(array, func){

    let newArray = []
    for (let i in array){
        let stock = func(array[i], i, array)
        newArray.push(...stock)
    }
    return newArray
}


  