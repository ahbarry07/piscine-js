import { colors } from "./fifty-shades-of-cold.data.js"

function generateClasses(){
    
    let style = document.createElement('style')
    for(let i in colors){
        style.appendChild(document.createTextNode(`.${colors[i]}{background: ${colors[i]};}`))
    }
    document.head.appendChild(style)
}

function generateColdShades(){

    for(let i in colors){
        if (colors[i].includes('aqua') || colors[i].includes('blue') || colors[i].includes('turquoise') || colors[i].includes('green') || colors[i].includes('cyan') || colors[i].includes('navy') || colors[i].includes('purple')){
            let div = document.createElement('div')
            div.setAttribute('class', colors[i])
            div.textContent = colors[i]
            document.body.append(div)
        }
    }
}

function choseShade(elementColor){

    let allDiv = document.querySelectorAll('div')
    for(let i = 0; i < allDiv.length; i++){
        allDiv[i].className = elementColor
    }
}

export{generateClasses, generateColdShades, choseShade}