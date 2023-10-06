
function retry(count = 0, callback = async function(){}){
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

function timeout(delay, callback){
    return async (...args) =>{
        let timer
        const newPromise = new Promise((_, reject) => {
           timer = setTimeout(() =>{
                reject(new Error('timeout'))
            }, delay)
        })

    try {
            const result = await Promise.race([callback(...args), newPromise])
            clearTimeout(timer) 
            return result
        }catch (error) {
            throw error
        }
    }
}