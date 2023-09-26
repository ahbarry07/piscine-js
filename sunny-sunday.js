
function sunnySunday(inputDate) {

    let modulo = 7
    let year = inputDate.getFullYear() 
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let dayOfWeek = inputDate.getDay()
    if (year < 100){
        modulo = 6
    }
    let adjustedDayOfWeek = (dayOfWeek + 6) % modulo
    return weekdays[adjustedDayOfWeek]
}

console.log(sunnySunday(new Date('0001-01-07')))