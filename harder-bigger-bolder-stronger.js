
function generateLetters(){
    
    let [numDiv, size, weigth]  =[0, 11, 300]
   
    while (numDiv < 120){
        let div = document.createElement('div')
        let letter = String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65)
        div.append(letter)
        div.style.fontSize = `${size}px`
        if (numDiv === 40) div.style.fontWeight = `${weigth};`
        else if (numDiv === 80) div.style.fontWeight =  `${weigth+100};`
        else div.style.fontWeight = `${weigth+weigth};`
        document.body.append(div)

        size++
        numDiv++
    }
}

export {generateLetters}