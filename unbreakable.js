
function split(str, sep){

    let tab = []
    let seq = ""
    for(let i = 0; i < str.length; i++){
        
        if (str.slice(i, i+sep.length) === sep){
            console.log(sep)
            tab.push(seq)
            seq = ""
            i += sep.length 
        }
        seq = seq + str[i]
        if (i === str.length-1){
            tab.push(seq)
        }
    }
   
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

