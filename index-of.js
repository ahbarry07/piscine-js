function indexOf(array, occ){
    let ind = 0
    if (arguments.length === 2){
        ind = 0
    }else if (arguments.length === 3){
        ind = parseFloat(arguments[2])
    }

    for(let i = ind; i < array.length; i++){
        if (array[i] === occ){
           return i
        }
    }
    return -1
}

function lastIndexOf(array, occ){
    let ind = 0
    if (arguments.length === 2){
        ind = 0
        for(let i = array.length; i >= ind; i--){
            if (array[i] === occ){
               return i
            }
        }
    }else if (arguments.length === 3){
        ind = parseFloat(arguments[2])
        for(let i = ind; i >= 0; i--){
            if (array[i] === occ){
               return i
            }
        }
    }

    return -1
}

function includes(array, occ){
    let ind = 0
    if (arguments.length === 2){
        ind = 0
    }else if (arguments.length === 3){
        ind = parseFloat(arguments[2])
    }

    for(let i = ind; i < array.length; i++){
        if (array[i] === occ){
           return true
        }
    }
    return false
}

console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))