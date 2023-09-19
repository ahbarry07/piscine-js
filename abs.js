
const isPositive = (number) => number > 0

function abs(number){
    if (number >= 0){
        return number
    }else{
        return parseInt(number.toString().slice(1))
    }
}


