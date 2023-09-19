
function getAcceleration(data){

    if ((Number.isNaN(data.f) || Number.isNaN(data.m)) && (Number.isNaN(data.Δv) || Number.isNaN(data.Δt)) && (Number.isNaN(data.d) || Number.isNaN(data.t))){
        return "impossible"
    }
    let acc1 = data.f/data.m
    let acc2 = data.Δv/data.Δt
    let acc3 = (2*data.d)/(data.t**2)

    if (!Number.isNaN(acc1)){
        return acc1
    }else if (Number.isNaN(acc1) && !Number.isNaN(acc2)){
        return acc2
    }else if (!Number.isNaN(acc2) && Number.isNaN(acc3)){
        return acc3
    }else if (Number.isNaN(acc1) && Number.isNaN(acc2) && !Number.isNaN(acc3)){
        return acc3
    }else {
        return "impossible"
    }
    
}

