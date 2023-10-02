
function pick(obj, str_or_arr){
    let newObj = {}
    if (!(Array.isArray(str_or_arr))) str_or_arr = str_or_arr.split(' ')

    for(let i in str_or_arr){
        if(obj.hasOwnProperty(str_or_arr[i])){
            newObj[str_or_arr[i]] = obj[str_or_arr[i]]
        }
    }
    return newObj
}

function omit(obj, str_or_arr){
    let newObj = {}
    if ((Array.isArray(str_or_arr))) str_or_arr = str_or_arr.join(' ')
    for(let [key, value] of Object.entries(obj)){
        if(!(str_or_arr.includes(key))){
            newObj[key] = value
        }
    }
    return newObj
}

