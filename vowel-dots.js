
function vowelDots(str){

    let vowels = /[aeiouAEIOU]/g

    const result = str.replace(vowels, (match) => match + '.')
    return result
   
}
