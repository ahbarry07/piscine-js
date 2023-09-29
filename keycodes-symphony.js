
function compose(){
    const regex = /^[a-z]$/
    let allDiv = []
    window.addEventListener("keydown", function(event){
        let touch = event.key
        Math.floor(Math.random() * (90 - 65 + 1)) + 65
        let color1 =  Math.floor(Math.random() * 257)
        let color2 =  Math.floor(Math.random() * 257)
        let color3 =  Math.floor(Math.random() * 257) 
        let couleur = `rgb(${color1},${color2},${color3})`

        let match = touch.match(regex)
        switch (touch){
            case "Escape": 
                document.body.innerHTML = ""
                break
            case "Backspace": 
                if(allDiv.length > 0){
                    let lastDiv = allDiv.pop()
                    lastDiv.remove()
                    break
                } 
            case match.join('') :
                let div = document.createElement('div')
                div.setAttribute('class', 'note')
                div.style.background = couleur
                div.textContent = match
                document.body.append(div)
                allDiv.push(div)
                break
            default: break        
        }
    })
}

export {compose}