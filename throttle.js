
function throttle(callback, delay){
	let lastTime = 0
	return (...args) => {
		const timeNow = new Date().getTime()
		if (timeNow - lastTime < delay){
			return
		}
		lastTime = timeNow
		return callback(...args)
	}
}

function opThrottle(callback, delay, lead = false){
	let inc = true
	const timeNow = new Date().getTime()
	let lastTime = 0
	return (...args) =>{
		if (inc && lead){
			callback(...args)
		}
		inc = false

		if (timeNow - lastTime < delay){
			return
		}
		lastTime = timeNow
		return callback(...args)
	}
}