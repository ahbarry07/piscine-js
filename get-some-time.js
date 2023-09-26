
function firstDayWeek(week, year){
   
    year = parseInt(year)
    let annee = new Date(year, 0, 1)
	let jour = annee.getDay()
    if (week === 1 && jour !==1){
        return checkYear(year, annee)
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
    return checkYear(year, annee)
    
}

function checkYear(yearChecked, anneeObt){

    const regex = /\/|\,/g
    if (yearChecked < 100){
        anneeObt.setFullYear(yearChecked)
    }
    let dateFormat = new Intl.DateTimeFormat('fr-FR').format(anneeObt)
    let split = dateFormat.split('/')
    if (split[0].length < 2){
        split[0] = '0'.toString() + split[0]
    }
    if (split[1].length < 2){
        split[1] = '0'.toString() + split[1]
    }
    split = split.join('/')
    let lastFormat = split.replace(regex, '-')
    
    return lastFormat.join('')
}
