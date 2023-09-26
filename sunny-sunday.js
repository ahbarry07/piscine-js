
function sunnySunday(inputDate) {

    // let modulo = 7
    let year = inputDate.getFullYear() 
    if (inputDate.getTime()=== (new Date(year, 0, 1)).getTime()){return 'Monday'}
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let dayOfWeek = inputDate.getDay()
  
    let adjustedDayOfWeek = (dayOfWeek + 6) % 6
   
    return weekdays[adjustedDayOfWeek]
}

console.log(sunnySunday(new Date('0001-01-06')))