
function RNA(brin){
    let DNA = ""
    for (let i = 0; i < brin.length; i++){
        if (brin[i] === "A"){
            DNA+="U"
        }else if (brin[i] === "T"){
            DNA+="A"
        }else if (brin[i] === "C"){
            DNA+="G"
        }else if (brin[i] === "G"){
            DNA+="C"
        }
    }
    return DNA
}

function DNA(brin){
    let RNA = ""
    for (let i = 0; i < brin.length; i++){
        if (brin[i] === "A"){
            RNA+="T"
        }else if (brin[i] === "U"){
            RNA+="A"
        }else if (brin[i] === "C"){
           RNA+="G"
        }else if (brin[i] === "G"){
            RNA+="C"
        }
    }
    return RNA
}

