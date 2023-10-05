
function debounce(func, attempt){
	let timer 
	return function(...args){
		clearTimeout(timer);
		timer = setTimeout(function(){
			func.apply(this, args);
		}, attempt)
	}
}

function opDebounce(func, attempt, option = false){
	let timer
	let inc = true
	return function(...args){
		if (inc && option){
			func.apply(this, args)
			inc = false
		}
		clearTimeout(timer)
		timer = setTimeout(function(){
			func.apply(this, args)
		}, attempt)
	}
}
