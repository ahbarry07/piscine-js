

function dayOfTheYear(date){
    
    let year = date.getFullYear()
    let origine = new Date(year, 0, 1)
    let dateNow =  Date.now()
    let numberOfday = (dateNow-origine)/(24*60*60*1000)
    if (date.toUTCString()==='Mon Jan 01 0001 00:00:00 GMT+0000'){
        return 1
    }
    
    if (year < 100){
        Math.trunc(numberOfday + 1)
    }
    return Math.trunc(numberOfday)
}

