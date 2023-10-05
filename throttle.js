
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

function opThrottle(callback, delay, lead){
	let inc = true
	const timeNow = new Date().getTime()
	let lastTime = 0
	return (...args) =>{
		if (inc && lead){
			inc = false
		}
		if (timeNow - lastTime < delay){
			return
		}
		lastTime = timeNow
		return callback(...args)
	}
}