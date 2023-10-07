
async function series(array){
    let res = []
    for (let i in array){
        res[i] = await Promise.resolve(array[i]())
    }
    return res 
}