const dateRef = new Date('0001-01-01')

function addWeek(date) {
 
    const daysOfWeek = new Map()
    let days = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'secondMonday', 'secondThuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday']
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


function timeTravel(Obj){

    // let date = new Date(Obj)
    Obj.hour.setHours()
    Obj.minute.setMinutes()
    Obj.second.setSeconds

    let date = new Date (Obj)
    return date
}
