
function letterSpaceNumber(str){

    let regesp = /[\w\s\d]/g //le caractere doit contenir une chaine alphaNumerique et des entiers
    let found = (str.match(regesp))

    return found
}

console.log(letterSpaceNumber("hElRoR WW 17"))