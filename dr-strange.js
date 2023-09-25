const dateRef = new Date('0001-01-01')

function addWeek(date) {
 
    const daysOfWeek = new Map()
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday']
    for(let i = 0; i <= days.length-1; i++){
        daysOfWeek.set(i, days[i])
    }

    let datDiff = ((date - dateRef) / (24 * 60 * 60 * 1000))
    let datWeek = datDiff % 14
    console.log(datWeek)
    for(let [key, value] of daysOfWeek){
        if (datWeek === key){
            return value
        }
    }
    return ""
}


function  timeTravel(Obj) {

    Obj.date.setHours(Obj.hour, Obj.minute, Obj.second)

    return Obj.date
}

