
function fusion(obj1, obj2){
    
    let objConcat = {}
    for (let key in obj1){
        if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)){
            Array.isArray(obj1[key]) && Array.isArray(obj2[key])           ?  objConcat[key] = obj1[key].concat(obj2[key]) :
            typeof obj1[key] === "string" && typeof obj2[key] === "string" ?  objConcat[key] = obj1[key] + " " + obj2[key] :
            typeof obj1[key] === "number" && typeof obj2[key] === "number" ?  objConcat[key] = obj1[key] + obj2[key]       :     
            typeof obj1[key] === "object" && typeof obj2[key] === "object" ?  objConcat[key] = fusion(obj1[key], obj2[key]):
                                                                              objConcat[key] = obj2[key]
        }
        else if (obj1.hasOwnProperty(key)) objConcat[key] = obj1[key]
        else if (obj2.hasOwnProperty(key)) objConcat[key] = obj2[key]
    }
    for (const clé in obj2) {
        if (!obj1.hasOwnProperty(clé)) objConcat[clé] = obj2[clé]    
    }
    return objConcat
}
