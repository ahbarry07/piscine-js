
function interpolation({step, start, end, callback, duration}){

    let timer = setInterval(function(){

        let interval = end / step
        for (let i = 0; i <= step; i += interval){
            for(let j = start; j <= duration; j += i*duration){
                callback([i, j])
            }
            if (end-i === 2*interval){
                clearInterval(timer)
            }
            callback([i, j])
        }
    }, duration / step)

}