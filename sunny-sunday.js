
function sunnySunday(inputDate) {

    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dayOfWeek = inputDate.getDay()
    const adjustedDayOfWeek = (dayOfWeek + 6) % 6
    return weekdays[adjustedDayOfWeek]
}

console.log(sunnySunday(new Date('0001-01-07')))