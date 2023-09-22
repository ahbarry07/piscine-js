
function split(str, sep){

    let tab = []
    let seq = ""
    if (sep ===""){
        return [...str]
    }
    if (str.length === 0){
        tab.push("")
        return tab
    }
    for(let i = 0; i < str.length; i++){
        if (str.slice(i, i+sep.length) === sep){
            tab.push(seq)
            seq = ""
            i += sep.length - 1
        }else{
            seq += str[i]
        } 
    }
    tab.push(seq)
   
    return tab
}

function join(array, sep){
    let str = ""
    for (let i = 0; i < array.length; i++){
        str = str + array[i]
        if (i < array.length-1){
            str = str + sep
        }
    }
    return str
}

console.log(split('', 'Riad'))