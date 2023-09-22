
function pyramid(elem, size){

    let j = 0
    let str =  ""
    for (let i = 1; i <= size; i++){
        for (let k = 1; k <= size-i; k++){
            str += " ".repeat(elem.length) 
        }
        while(j < 2*i-1){
            str += elem + ""
            j++ 
        }
        j = 0
        if (i<size){
            str += "\n"
        }
    }

   return str
}

