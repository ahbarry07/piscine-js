
function throttle(callback, delay) {
	let lastTimeOfExecution = 0
	return (...args) => {
		const timeNow = new Date().getTime()
		if (timeNow - lastTimeOfExecution < delay) {
			return
		}
		lastTimeOfExecution = timeNow
		return callback(...args)
	}
}

function opThrottle(callback, delay, { leading = true, trailing = true } = {}) {
	let lastTimeOfExecution =new Date().getTime()
	let timer

	if (leading) {
		lastTimeOfExecution = 0
	}
	return (...args) => {
		const timeNow = new Date().getTime()

		if (timeNow - lastTimeOfExecution >= delay){
			callback(...args)
			lastTimeOfExecution = timeNow
			leading = false
		}
		if (trailing) {
			clearTimeout(timer)
			timer = setTimeout(() => {
				callback(...args)
			}, delay)
		}
	}
}