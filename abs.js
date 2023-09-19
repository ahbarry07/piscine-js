
const isPositive = (number) => number > 0

function abs(number){
    if (number >= 0){
        return number
    }else{
        return parseFloat(number.toString().slice(1))
    }
}


console.log(abs(-34.4))