function deepCopy(obj_or_array){

    if (!Array.isArray(obj_or_array) || !typeof obj_or_array === "object" || obj_or_array === null || obj_or_array instanceof RegExp) return obj_or_array

    if (Array.isArray(obj_or_array)){
        let newArray = []
        for(let i in obj_or_array){
            newArray[i] = deepCopy(obj_or_array[i])
        }
        return newArray
    }
    if (typeof obj_or_array==='object'){
        let newObj = {}
        for(let [key, value] of obj_or_array){
            newObj[key] = deepCopy(value)
        }
        return newObj
    }
}