
function vowelDots(str){

    const vowels = /[aeiou]/g
    let [newStr, match] = ["", ""]

    if (str.match(vowels) !== null){
         match = str.match(vowels) 
    }

    for (let i= 0; i< str.length; i++){
        newStr += str[i]
        for(let res of match){
            if (str[i] === res){
                newStr += '.'
            }
        }
    }
    return newStr
}

