
function debounce(func, attempt){
	let timer 
	return function(...args){
		clearTimeout(timer);
		timer = setTimeout(function(){
			func.apply(this, args);
		}, attempt)
	}
}

function opDebounce(func, attempt, option){
	let timer
	// option = false
	return function(...args){
		clearTimeout(timer)
		if (option){
			timer = setTimeout(function(){
				func.apply(this, args)
			}, attempt)
		}else{
			func.call(this, ...args)
		}
	}
}