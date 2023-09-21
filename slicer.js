
function slice(value, debut){

    let fin = arguments.length === 2 ? value.length : parseFloat(arguments[2])

    if ((typeof value) === "string"){

        let str = ""
        if (debut < 0 && fin >= 0){
            debut = value.length - Math.abs(debut)
            for(let i = debut; i < fin; i++){
                str = str + value[i]
            }
            return str
        }else if (debut >= 0 && fin < 0){
            fin = value.length - Math.abs(fin)
            for(let i = debut; i < fin; i++){
                str = str + value[i]
            }
            return str
        }
        if (fin < 0){
            fin = value.length - Math.abs(fin)
        }
        debut = Math.abs(debut)
        for(let i = debut; i < fin; i++){
            str = str + value[i]
        }
        return str
    }

    let array = []
    if (debut < 0 && fin >= 0){
        debut = value.length - Math.abs(debut)
        for(let i = debut; i < fin; i++){
            array.push(value[i])
        }
        return array
    }else if (debut >= 0 && fin < 0){
        fin = value.length - Math.abs(fin)
        for(let i = debut; i < fin; i++){
            array.push(value[i])
        }
        return array
    }
    if (fin < 0){
        fin = value.length - Math.abs(fin)
    }
    debut = Math.abs(debut)
    for(let i = debut; i < fin; i++){
        array.push(value[i])
    }
    return array
}

