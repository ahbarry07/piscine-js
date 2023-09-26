

function dayOfTheYear(date){
    
    let year = date.getFullYear()
    let origine = new Date(year, 0, 1)
    let dateNow =  Date.now()
    let numberOfday = (dateNow-origine)/(24*60*60*1000)
    if (year < 100){
        numberOfday + 1
    }
    return numberOfday
}