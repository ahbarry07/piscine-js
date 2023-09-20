const isPositive = (number) => number > 0

//Valeur absolue
function abs(number){
    if (number >= 0){
        return number
    }
    return parseFloat(number.toString().slice(1))
}
