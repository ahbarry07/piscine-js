function divmodulo(num1, num2){
    let count = 0
    let divmod = []
    if (num1 === 0){
        divmod.push(0, num2)
        return divmod
    }else if (num1 < 0 && num2 > 0){
        let res = Math.abs(num1)
        do {
             res = res - num2
             count = count +1
        }while(res >= num2)
     
       count = parseFloat('-' + count.toString())
       res = parseFloat('-' + res.toString())
       divmod.push(count, res)
       return divmod
    }else if (num2 < 0 && num1 > 0){
        let res = num1
        num2 = Math.abs(num2)
        do {
             res = res - num2
             count = count +1
        }while(res >= num2)
     
       count = parseFloat('-' + count.toString())
       divmod.push(count, res)
       return divmod
    }else if (num1 < 0 && num2 < 0){
        let res = Math.abs(num1)
        num2 = Math.abs(num2)
        do {
             res = res - num2
             count = count +1
        }while(res >= num2)
        res = parseFloat('-' + res.toString())
        divmod.push(count, res)
        return divmod
    }
    let res = num1
    while (res >= num2){
        count++
        res = res - num2
    }
    divmod.push(count, res)
    return divmod
}

function multiply(num1, num2){

    if (num1===0 || num2===0){//Si l'un des nombre est nulle
        return 0
    }else if (num1 < 0 && num2 > 0){//Si le premier nombre est negatif
        let result = num2
        num1 = Math.abs(num1)
        for(let i=1; i<num1; i++){
            result = result + num2
        }
        result = parseFloat("-"+result.toString())
        return result
    }else if (num2 < 0 && num1 > 0){//Si le deuxieme nombre est negatif
        num2 = Math.abs(num2)
        let result = num2
        for(let i=1; i<num1; i++){
            result = result + num2
        }
        result = parseFloat("-"+result.toString())
        return result
    }else if (num1 < 0 && num2 < 0){
        num1 = Math.abs(num1)
        num2 = Math.abs(num2)

        let result = num2
        for(let i=1; i<num1; i++){
            result = result + num2
        }
        return result
    }

    let result = num2
    for(let i=1; i<num1; i++){
        result = result + num2
    }
    return result
}

function divide(num1, num2){
    return divmodulo(num1, num2)[0]
}

function modulo(num1, num2){
   return divmodulo(num1, num2)[1]
}

console.log(divide(3, 22))