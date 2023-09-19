
function sign(number){
    if (number > 0){
        return 1
    }else if (number < 0){
        return -1
    }else if (number === 0){
        return 0
    }
}

function sameSign(num1, num2){
    if ((num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0)){
        return true
    }

    return false
}
