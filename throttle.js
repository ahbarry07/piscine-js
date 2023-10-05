
function throttle(callback, delay){
	let lastTimeOfExecution = 0
	return (...args) => {
		const timeNow = new Date().getTime()
		if (timeNow - lastTimeOfExecution < delay){
			return
		}
		lastTimeOfExecution = timeNow
		return callback(...args)
	}
}

function opThrottle(callback, delay, {trailing, leading}){
	let lastTimeOfExecution = 0
	let timeNow = new Date().getTime()
	let timer
	return (...args) =>{
		if (leading) {
			lastTimeOfExecution = timeNow
			leading = false
		}
		if (timeNow - lastTimeOfExecution < delay){
			callback(...args)
			lastTimeOfExecution = timeNow
		}
		if (trailing) {
			clearTimeout(timer)
      		timer = setTimeout(function(){
				callback(...args);
      		}, delay);
		}
	}
}