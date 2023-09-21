
function slice(value, debut){

    let fin = arguments.length === 2 ? value.length : parseFloat(arguments[2])

    if ((typeof value) === "string"){
        let str = ""
        for(let i = debut; i < fin; i++){
            str = str + value[i]
        }
        return str
    }
    let array = []
    for(let i = debut; i < fin; i++){
        array.push(value[i])
    }
    return array
}