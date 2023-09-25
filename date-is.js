
const  isValid = (date) => {
    return date !== null && date !== undefined && date instanceof Date && date.toString() !== 'Invalid Date' || Number.isInteger(date)
}  

const isAfter = (date1, date2) => (new Date(date1) > new Date(date2))

const isBefore = (date1, date2) => (new Date (date1) < new Date(date2))

const isFuture = (date) => Date.now() < new Date(date).getTime()

const  isPast = (date) =>isValid(date) && isBefore(date)

console.log(isPast('2013-01-01'))