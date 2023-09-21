
function globalFunc(array, occ){

    let ind = 0
    if (arguments.length === 2){
        ind = 0
    }else if (arguments.length === 3){
        ind = parseFloat(arguments[2])
    }

    let allResult = []
    let finalResult = []

    for(let i = ind; i < array.length; i++){
        if (array[i] === occ){
            allResult.push(i)
        }
    }
    if (allResult.length === 0){
        finalResult.push(-1, -1, false)
        return finalResult
    }else if (allResult.length === 1){
        finalResult.push(allResult[0], allResult[0], true)
        return finalResult
    }
    finalResult.push(allResult[0], allResult[allResult.length-1], true)
    return finalResult
}

const indexOf = (array, ind) => globalFunc(array, ind)[0]

const lastIndexOf = (array, ind) => globalFunc(array, ind)[1]

const includes = (array, ind) => globalFunc(array, ind)[2]

