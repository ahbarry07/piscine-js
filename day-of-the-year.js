

function dayOfTheYear(date){
    
    let year = date.getFullYear()
    if (year < 1000){
        year += 1
    }
   
    let padStart = year.toString().padStart(4, '0')
    let origineDate = (padStart+'-01-01')
    let origine = new Date(origineDate)
    const timeDifference = date - origine;
    let numberOfday = Math.floor(timeDifference / (24*60*60*1000))


    return numberOfday + 1
}

