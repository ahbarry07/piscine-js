
const adder = (array, initial) => array.reduce((sum, currentValue) => sum + currentValue, initial)

const sumOrMul = (array, num) => array.reduce((sum, currentValue) => currentValue % 2 === 0 ? sum * currentValue : sum + currentValue, num)

const funcExec = (functions, initial) => functions.reduce((acc, func) => func(acc), initial);

const array1 = [1, 2, 3, 5, 8];
console.log(sumOrMul(array1, 5))
console.log(adder(array1))

