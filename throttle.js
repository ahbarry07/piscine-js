
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

function opThrottle(callback, delay, { leading = false, trailing = false }) {
	let lastTimeOfExecution = 0
	let timer

	return (...args) => {
		const timeNow = new Date().getTime()

		if (leading && timeNow - lastTimeOfExecution >= delay) {
			callback(...args)
			lastTimeOfExecution = timeNow
		}

		if (trailing) {
			clearTimeout(timer)
			timer = setTimeout(() => {
				callback(...args)
				lastTimeOfExecution = timeNow
			}, delay)
		}
	}
}