

function dayOfTheYear(date){
    
    let year = date.getFullYear()
    let origine = new Date(year, 0, 1)
    let dateNow = new Date.now()

    return ((dateNow-origine)/(24*60*60*1000))
}