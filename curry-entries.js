
function defaultCurry (obj1){
    return function(obj2){
        let resultObj = {}
        for(let [key, value] of Object.entries(obj2)){
            if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)){
                resultObj[key] = value
            }else if (obj2.hasOwnProperty(key)){
                resultObj[key] = value
            }
        }
        for(let [key, value] of Object.entries(obj1)){
            if (!obj2.hasOwnProperty(key)){
                resultObj[key] = value
            }
        }
        return resultObj
    }
}

const mapCurry = (func) => (obj) => Object.fromEntries(Object.entries(obj).map(func))

const  reduceCurry = (func) => ((obj, initialValue) => { 
    return initialValue === undefined ? Object.entries(obj).reduce((acc, [key, value]) => func(acc, [key, value])) : Object.entries(obj).reduce((acc, [key, value]) => func(acc, [key, value]), initialValue)
    
})

const filterCurry = (func) => (obj) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => func([key, value])))

const reduceScore = (obj1, obj2) => reduceCurry((acc, [, value]) => value.isForceUser ? acc + value.pilotingScore + value.shootingScore : acc) (obj1, obj2)

const filterForce = (obj1) => filterCurry(([, value]) => value.isForceUser && value.shootingScore >= 80)(obj1)


function mapAverage(obj) {
    let averageScore = mapCurry(([k, value]) => [k,(value.pilotingScore + value.shootingScore) / 2])(obj)
    for (let key in averageScore) {
        obj[key].averageScore = averageScore[key];
    }
    return obj;
}
