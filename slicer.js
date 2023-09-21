
function slice(value, debut){

    let fin = 0
    if (arguments.length === 2){
        fin = value.length
    }else{
        fin = parseFloat(arguments[2])
    }

    if ((typeof value) === "string"){
        let str = ""
        for(i = debut; i < fin; i++){
            str = str + value[i]
        }
        return str
    }
    let array = []
    for(i = debut; i < fin; i++){
        array.push(value[i])
    }
    return array
}