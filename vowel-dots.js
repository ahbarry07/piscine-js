
const vowels = /[aeiouAEIOU]/g

function vowelDots(str){

    if (vowels.test(str)){
        const result = str.replace(vowels, (match) => match + '.')
        return result
    }
   
    return str
}
