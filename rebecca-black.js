
const isFriday = (date) => date.getDay()=== 5

const isWeekend = (date) => date.getDay() === 6 || date.getDay() === 0

const isLeapYear = (date) =>{
    let year = date.getFullYear() 
    let newDate = new Date(year, 0, 1)
    let nexYear = new Date(year+1, 0, 1)
    
    return ((nexYear-newDate)/(24 * 60 * 60 * 1000)) === 366
}

const isLastDayOfMonth = (date) =>  {
    
    if ((date.getDate() === 31 && checkMonth(date.getMonth())) || (date.getDate() === 30 && !checkMonth(date.getMonth())) ){return true}  
   
    if (date.getMonth() === 1)  {
        let year = date.getFullYear() 
        let newDate = new Date(year, 0, 1)
        let nexYear = new Date(year+1, 0, 1)
        
        if ((((nexYear-newDate)/(24 * 60 * 60 * 1000)) === 366 && date.getDate() === 29) ||(((nexYear-newDate)/(24 * 60 * 60 * 1000)) === 365 && date.getDate() === 28) ){
            return true
        }
    }  

    return false
}

const checkMonth = (month) =>{
    if (month===0 ||  month===2 || month===4 || month===6 || month===8 || month===9 || month===11){
        return true
    }
    return false
}
