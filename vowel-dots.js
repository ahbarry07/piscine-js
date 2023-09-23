
function vowelDots(str){

    const vowels = /[aeiouAEIOU]/g
    
    const result = str.replace(vowels, (match) => match + '.')

    return result
}

console.log(vowelDots('a'))