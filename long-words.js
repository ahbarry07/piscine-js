
const longWords = (array) => array.filter((value) => value.length >= 5) === array.length

const oneLongWord = (array) =>  array.filter((value) => value.length >= 10) >= 1

const noLongWords = (array) => array.filter((value) => value.length >= 7) === 0