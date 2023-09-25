
function dayWeek(day){

    const daysOfWeek = new Map()
    let days = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'secondMonday', 'secondThuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday']
    for(let i = 0; i <= days.length-1; i++){
        daysOfWeek.set(i+1, days[i])
    }

    for(let [key, value] of daysOfWeek){
        if (day === key){
            return value
        }
    }
    return ""
}

function addWeek(date) {
 
    let day = date.getDate()   
    
   if (day === 31){
        day = 1
   }else{
        day += 1
   }
   if (day <= 14){
        return dayWeek(day)
   }else{
        return dayWeek(day - 14)
   }
}


function timeTravel(Obj){

    let newHoure = Obj.setHours()

    return newHoure

}

