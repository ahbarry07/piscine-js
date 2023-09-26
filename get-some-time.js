
function firstDayWeek(week, year){

    let date = new Date(year)
    let annee = new Date(parseInt(year), 0, 1)
	let jour = date.getDay()
    
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
        count = 1
    }
    let newDat = ((week-1)*7)-count
    annee.setDate(annee.getDate() + newDat)

    let dateFormat = new Intl.DateTimeFormat('fr-FR').format(annee)
    const regex = /\//g
    let lastFormat = dateFormat.replace(regex, '-')
    return lastFormat
    
}

