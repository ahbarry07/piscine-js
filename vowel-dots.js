
function vowelDots(str){

    const vowels = /[aeiouAEIOU]/g

    if (vowels.test(str)){
        const result = str.replace(vowels, (match) => match + '.')
        return result
    }
   
    return str
}
