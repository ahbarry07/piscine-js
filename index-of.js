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
    if (arguments.length === 2){
        ind = 0
    }else if (arguments.length === 3){
        ind = parseFloat(arguments[2])
    }

    for(let i = array.length-1; i >= ind; i--){
        if (array[i] === occ){
           return i
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

console.log(indexOf(['t', 0, 0, 't'], 't', 1))