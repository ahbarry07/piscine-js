
function matchCron(cron, date){

    let [cronMin, cronHour, cronDay, cronMonth, cronDayOfWeek] = cron.split(' ')

    if (!(cronMin === '*' || parseInt(cronMin) === date.getMinutes())){
        return false
    }
    if (!(cronHour === '*' || parseInt(cronHour) === date.getHours())){
        return false
    }
    if (!(cronDay === '*' || parseInt(cronDay) === date.getDate())){
        return false
    }
    if (!(cronMonth === '*' || parseInt(cronMonth) === date.getMonth()+1)){
        return false
    }
    if (!(cronDayOfWeek === '*' || parseInt(cronDayOfWeek) === date.getDay())){
        return false
    }

    return true
}

