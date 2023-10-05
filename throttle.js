
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
	return (...args) =>{
		if (inc && lead){
			inc = false
		}
		let lastTime = 0
		if (timeNow - lastTime < delay){
			return
		}
		lastTime = timeNow
		return callback(...args)
	}
}