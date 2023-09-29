// import { styles } from "./pimp-my-style.data.js"

let currenClass = 0
let added = true
function pimp(){
    
    let div = document.querySelector('button')
    if (added){
        if(currenClass < styles.length){
            div.classList.add(styles[currenClass])
            currenClass++
        }
        if (currenClass===styles.length-1){
            div.classList.add('unpimp')
            added = false
        } 
    }else{
        if (currenClass > 0){
            currenClass--
            div.classList.remove(styles[currenClass]) 
        }
        if (currenClass === 0){
            div.classList.remove('unpimp')
            added = true 
        }  
    }
}

export {pimp}