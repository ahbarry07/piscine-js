const regexp = /\b\w+tion\b/g

const rep = /ion/g

const ionOut = (str) =>{
    const match = str.match(regexp)
    return match === null ? [] : match.map((value) => value.replace(rep, ''))
}

console.log(ionOut('transfusion'))