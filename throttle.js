
function throttle(callback, delay){
	let lastTimeOfExecution = 0
	return (...args) => {
		const timeNow = new Date().getTime()
		if (timeNow - lastTimeOfExecution < delay){
			return
		}
		lastTime = timeNow
		return callback(...args)
	}
}

function opThrottle(callback, delay, {trail=false, lead=false}){
	let lastTimeOfExecution = 0
	let timeNow = new Date().getTime()
	return (...args) =>{
		if (trail) {
			lastTimeOfExecution = timeNow
			trail = false
		}
		if (timeNow - lastTimeOfExecution < delay && lead){
			callback(...args)
			lastTimeOfExecution = timeNow
		}
		if (trail) {
      		setTimeout(() => {
	        callback(...args);
	        lastTimeOfExecution = timeNow;
      		}, delay);
		}
	}
}