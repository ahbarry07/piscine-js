

function dayOfTheYear(date){
    
    let year = date.getFullYear()
    if (year < 1000){
        year += 1
    }
   
    let padStart = year.toString().padStart(4, '0')
    let origineDate = (padStart+'-01-01')
    let origine = new Date(origineDate)
    let numberOfday = (date-origine)/(24*60*60*1000)

    if (numberOfday===0){
        return 1
    }
    return Math.round(numberOfday)
}

