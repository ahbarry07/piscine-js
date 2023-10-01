
function firstDayWeek(week, year){
   
    year = parseInt(year)
    let annee = new Date(year, 0, 1)
    console.log(annee)
	let jour = annee.getDay()
    console.log(jour)
    if (week === 1 && jour !==1){
        return formatDate(year, annee)
    }
    let count = 0
    if (jour > 1){
        for(let i=2; i < 7; i++){
          if (i-jour!==1){
            count++
          }else{
            break
          }
        }
    }else{
        count = 6
    }
    let newDat = ((week-1)*7)-count
    annee.setDate(annee.getDate() + newDat)
    return formatDate(year, annee)
    
}

function formatDate(yearChecked, anneeObt){

    if (yearChecked < 100){
        anneeObt.setFullYear(yearChecked)
    }
    let day = String(anneeObt.getDate()).padStart(2, '0');
    const month = String(anneeObt.getMonth() + 1).padStart(2, '0');
    if (yearChecked < 100){
        day = parseInt(day)
        day += 1
        if (day.toString().length<2){
            day = '0'.toString() + day.toString()
        }
    }
    while(yearChecked.toString().length < 4){
        yearChecked = '0'.toString() + yearChecked
    }
    const formattedDate = `${day}-${month}-${yearChecked}`;

    return formattedDate
}

console.log(firstDayWeek(2, 2017))