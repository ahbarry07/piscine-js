
function firstDayWeek(week, year){

    const regex = /\//g
   
    year = parseInt(year)
    let annee = new Date(year, 0, 1)
    date = annee.getFullYear()
	let jour = annee.getDay()
    if (week === 1 && jour !==1){
        let dateFormat = new Intl.DateTimeFormat('fr-FR').format(annee)
        let lastFormat = dateFormat.replace(regex, '-')
        return lastFormat
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
    if (year < 100){
        annee.setFullYear(year)
    }
    let dateFormat = new Intl.DateTimeFormat('fr-FR').format(annee)
    let lastFormat = dateFormat.replace(regex, '-')
    while (lastFormat.slice(6).length < 4){
        lastFormat = lastFormat.split('-')
        lastFormat[2]='0'+lastFormat[2]
        lastFormat = lastFormat.join('-')
    }
    return lastFormat
    
}

