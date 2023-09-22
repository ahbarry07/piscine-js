
function chunk(array, size){

    let bigArray = []
    let smallArray = []
    let newSize = size
    let ind = 0

    for (let i = ind; i < array.length; i++){
        smallArray.push(array[i])
        if (i === newSize-1){
            bigArray.push(smallArray)
            smallArray = []
            newSize += size
            ind = newSize -1
        }
        if (i === array.length-1 && smallArray.length !== 0){
            bigArray.push(smallArray)
        }
    }
    return bigArray
}

