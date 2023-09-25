
const  isValid = (date) => !isNaN((date)) || (date instanceof Date)

const isAfter = (date1, date2) => (new Date(date1) > new Date(date2))

const isBefore = (date1, date2) => (new Date (date1) < new Date(date2))

const isFuture = (date) => Date.now() > new Date(date)

const  isPast = (date) => Date.now() < new Date(date) 

console.log(isValid(1488370835081))