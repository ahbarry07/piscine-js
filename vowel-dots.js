
function vowelDots(str){

    const vowels = /[aeiouAEIOU]/g
    if( str.match(vowels) !== null){

        const result = str.replace(vowels, (match) => match + '.')
        return result
    }

    return str
}

console.log(vowelDots('c'))