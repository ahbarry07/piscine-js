const regexp = /\b\w+tion\b/g

const rep = /ion/g

const ionOut = (str) =>{
    const match = str.match(regexp).map((value) => value.replace(rep, ''))
    return match
}
