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
    }else if (arguments.length === 3){
        ind = parseFloat(arguments[2])
    }

    for(let i = ind; i >= 0; i--){
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

console.log(lastIndexOf(['t', 0, 0, 't'], 't', 2))