
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
	let lastTimeOfExecution = 0;
	let timer;
	let pendingArgs;

	return (...args) => {
		const timeNow = new Date().getTime();

		if (leading && (timeNow - lastTimeOfExecution >= delay || lastTimeOfExecution === 0)) {
			callback(...args);
			lastTimeOfExecution = timeNow;
			leading = false;
		} else {
			clearTimeout(timer);
			pendingArgs = args;
			timer = setTimeout(() => {
				if (trailing && pendingArgs) {
					callback(...pendingArgs);
					lastTimeOfExecution = new Date().getTime();
					pendingArgs = null;
				}
			}, delay);
		}
	};
}
