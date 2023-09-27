
const adder = (array, initial=0) => array.reduce((sum, currentValue) => sum + currentValue, initial)

const sumOrMul = (array, num =0) =>{
    return array.reduce((sum, currentValue) => {
        if (currentValue % 2 === 0) sum *= currentValue 
        else sum += currentValue
        return sum;
    }, num)
}

const funcExec = (functions, initial) => functions.reduce((acc, func) => func(acc), initial);
