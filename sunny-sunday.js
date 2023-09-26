
function sunnySunday(inputDate) {

    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dayOfWeek = inputDate.getDay()
    const adjustedDayOfWeek = (dayOfWeek + 6) % 7
    return weekdays[adjustedDayOfWeek]
}

