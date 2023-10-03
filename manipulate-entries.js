
function filterEntries(obj, args){
    obj = Object.entries(obj)
    let resultObj = {}
    for (const [key, value] of obj) {
        if(args([key, value], args)){
            resultObj[key] = value
        }
    }
    return resultObj
}

function mapEntries(entries, mapper) {
    let temp = {}
    for (let key in entries) {
        temp[key] = mapper([key, entries[key]])
    }
    let res = {}
    for (let key in temp) {
        res[temp[key][0]] = temp[key][1]
    }
    return res
}

function reduceEntries(obj, args, add=null){
    obj = Object.entries(obj)
    let acc = obj[0][1]
    for(let [key, value] of obj){
        acc = args(acc, [key, value]) 
    }
    return (acc - obj[0][1]) + add
}

function totalCalories(obj){
    return Number(
        reduceEntries(obj, (acc, curr) =>{
            let result = (nutritionDB[curr[0]]["calories"] / 100) * curr[1]
            return  acc + result
        }, 0).toFixed(1)
    )
}

const  lowCarbs = (obj) => filterEntries(obj, (curr) => (nutritionDB[curr[0]]["carbs"] / 100)*curr[1] < 50)

const cartTotal = (obj) =>  mapEntries(obj, (curr) => {
    let newObj = {}
    for(let [key, value] of Object.entries(nutritionDB[curr[0]])){
        newObj[key] = parseFloat((((nutritionDB[curr[0]][key] / 100) * curr[1])).toFixed(1))
    }
    return newObj
})
