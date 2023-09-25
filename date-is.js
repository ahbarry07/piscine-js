
const  isValid = (date) => isNaN(new Date(date))

const isAfter = (date1, date2) => (new Date(date1) > new Date(date2))

const isBefore = (date1, date2) => (new Date (date1) < new Date(date2))

function isFuture(date){

    dateDay = new Date()

    return new Date(date) > dateDay
}

function isPast(date){

    dateDay = new Date()

    return new Date(date) < dateDay
}