
async function isWinner(country){
    
  return  db.getWinner(country).then((data)=>{
        if (data.continent ==='Europe') {
            const resultCountry = db.getResults(data.id)
            let [year ,score] = [[],[]]
            return resultCountry.then((value) =>{
                if (value.length < 3) return `${country} is not what we are looking for because of the number of times it was champion`
                value.forEach(result => {
                    for(const [k, v] of Object.entries(result)){
                        if(k === 'year') year.push(v)
                        if(k === 'score') score.push(v)
                    }
                });
                
                return `${country} won the FIFA World Cup in ${year.join(', ')} winning by ${score.join(', ')}`
            })
        }
        return `${country} is not what we are looking for because of the continent`
    }).catch((e)=>{
        return `${country} never was a winner`
    })
}
