
function vowelDots(str){

    const vowels = /[aeiouAEIOU]/g
    
    const result = str.replace(vowels, (match) => match + '.')
}

