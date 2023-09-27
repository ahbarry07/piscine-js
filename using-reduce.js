
const adder = (array) => array.reduce((sum, currentValue) => sum + currentValue, 0)

const sumOrMul = (array, num) => array.reduce((sum, currentValue) => currentValue % 2 === 0 ? sum * currentValue : sum + currentValue, num)

const funcExec = (functions, initial) => functions.reduce((acc, func) => func(acc), initial);
