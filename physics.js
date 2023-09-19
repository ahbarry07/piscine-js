
function getAcceleration(data){

    if ((Number.isNaN(data.f)) || (Number.isNaN(data.m)) || data.m === 0){
        return "impossible"
    }

    return data.f/data.m
}
