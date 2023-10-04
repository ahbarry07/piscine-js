let is = {}
is.obj = function (objet){
    if (Array.isArray(objet) || objet === null || objet instanceof RegExp){
        return false
    }
    return (typeof objet) === "object"  
}

function replica(obj, ...target){

    for(const src of target){
        for (const key in src){
            if (is.obj(src[key])){
                if (!obj.hasOwnProperty(key) || !is.obj(obj[key])){
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
