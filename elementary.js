
function multiply(num1, num2){
    let result = num2
    for(let i=1; i<num1; i++){
        result = result + num2
    }
    return result
}

function divide(num1, num2){
    let count = 0
    let res = num1
   do {
        res = res - num2
        count = count +1
   }while(res>num2)

   return count
}

function modulo(num1, num2){
   
    let res = num1
   do {
        res = res - num2
   }while(res>num2)

   return res
}

