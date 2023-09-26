
const isFriday = (date) => date.getDay()=== 5

const isWeekend = (date) => date.getDay() === 6 || date.getDay() === 0

const isLeapYear = (date) =>{
    let year = date.getFullYear() 
    let newDate = new Date(year, 0, 1)
    let nexYear = new Date(year+1, 0, 1)
    
    return ((nexYear-newDate)/(24 * 60 * 60 * 1000)) === 366
}

const isLastDayOfMonth = (date) =>  (date.getDate() === 31 && (date.getMonth() === 0 || date.getMonth()%2 === 0) ? true 
    : date.getDate() === 30 && (date.getMonth()%2 !== 0)) ? true 
    : date.getMonth() === 1 && (date.getdate() === 28 || date.getdate() === 29) ? true : false

