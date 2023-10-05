
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
	return (...args) =>{
		if (inc && lead){
			inc = false
		}
		const timeNow = new Date().getTime()
		let lastTime = 0
		if (timeNow - lastTime < delay){
			return
		}
		lastTime = timeNow
		return callback(...args)
	}
}