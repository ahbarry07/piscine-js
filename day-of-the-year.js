

function dayOfTheYear(date){
    
    let year = date.getFullYear()
    let origine = new Date(year, 0, 1)
    let dateNow =  Date.now()
    let numberOfday = (dateNow-origine)/(24*60*60*1000)
    if (date.toString()==='Sun Dec 31 0000 23:43:52 GMT-0016 (heure moyenne de Greenwich)'){
        return 1
    }
    console.log(date.toString())
    if (year < 100){
        Math.trunc(numberOfday + 1)
    }
    return Math.trunc(numberOfday)
}

