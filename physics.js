
function getAcceleration(data){

    if (data == {} || (Number.isNaN(data.f)) || (Number.isNaN(data.m)) || data.m === 0){
        return "impossible"
    }
   
    let acc = data.f/data.m
    if (Number.isNaN(acc)){
        return "impossible"
    }
    return  acc
}

