
function countLeapYears(date){

    let count = 0
    let year = date.getFullYear() 
    for (let i=1; i<=year+1; i++){
        console.log(new Date(i, 0, 1))
        console.log(new Date(i+1, 0, 1))
        if (((new Date(i + 1, 0, 1)) -(new Date(i, 0, 1)))/(24*60*60*1000) === 366 && i !== year+1){
            count++
        }
    }
  return count
}

