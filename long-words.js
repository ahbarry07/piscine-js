
const longWords = (array) => array.every((value) => value.length >= 5) 

const oneLongWord = (array) =>  array.some((value) => value.length >= 10)

const noLongWords = (array) => array.every((value) => value.length < 7)