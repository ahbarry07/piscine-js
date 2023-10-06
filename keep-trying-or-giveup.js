
function retry(count = 3, callback = async function(){}){
    return async (...args) =>{
        try{
            let result = await callback(...args)
            return result
        }catch(error){
            if (count > 0) return retry(count-1, callback)(...args)
            throw(error)
        }
    }
}

