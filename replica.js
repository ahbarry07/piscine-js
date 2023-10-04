
function replica(obj, ...target){

    for(const src of target){
        for (const key in src){
            if ((!Array.isArray(obj[key])) && obj[key] !== null && !obj[key] instanceof RegExp){
                if (!obj.hasOwnProperty(key) || (!Array.isArray(obj[key])) && obj[key] !== null && obj[key] instanceof !RegExp){
                    obj[key] = {}
                }
                replica(obj[key], src[key])
            }else{
                obj[key] = src[key]
            }
        }
    }

    return obj
}
