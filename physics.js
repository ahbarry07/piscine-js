
function getAcceleration(data){

    if (data.length === undefined || (Number.isNaN(data.f)) || (Number.isNaN(data.m)) || data.m === 0){
        return "impossible"
    }
   
    return data.f/data.m
}

console.log(getAcceleration({}))