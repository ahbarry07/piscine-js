
function interpolation({step = 0, start = 0, end = 0, callback, duration = 0}){

    let interval = (end - start) / step
    let [current, i] = [start, 0]
    let timer = setInterval(function(){
        if ( i < step){
            callback([current, (duration / step)*(i+1)])
            current += interval
            i++
        }else{
            clearInterval(timer)
        }
    }, duration / step)

}
