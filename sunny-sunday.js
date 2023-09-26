
function sunnySunday(inputDate) {
    
    let year = inputDate.getFullYear() 
    
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let dayOfWeek = inputDate.getDay()
    let newDate = new Date (year, 0, 1)
    newDate.setFullYear('0001')
    let adjustedDayOfWeek = Math.ceil((inputDate-newDate)/ (24 * 60 * 60 * 1000))
   
    return weekdays[adjustedDayOfWeek%6]
}

