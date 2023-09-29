
function generateLetters(){
    
    let [numDiv, size]  =[0, 11]
   
    while (numDiv < 120){
        let div = document.createElement('div')
        let letter = String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65)
        div.append(letter)
        div.style.fontSize = `${size}px`
        if (numDiv === 40) div.style.fontWeight = 300
        else if (numDiv === 80) div.style.fontWeight =  400
        else div.style.fontWeight = 600
        document.body.append(div)

        size++
        numDiv++
    }
}

export {generateLetters}