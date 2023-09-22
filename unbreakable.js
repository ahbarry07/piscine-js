
function split(str, sep){

    let tab = []
    let seq = ""
    if (sep ===""){
        let newstr = ""
        for(let i=0; i < str.length; i++){
            newstr+=str[i]
            if (i< str.length-1){
                newstr+="#"
            }
        }
        sep = "#"
        for(let i = 0; i < newstr.length; i++){
            if (newstr[i] === sep){
                tab.push(seq)
                seq = ""
                i += sep.length - 1
            }else{
                seq += newstr[i]
            } 
        }
        tab.push(seq)
       
        return tab
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