
function build(numOfBric){
 let i = 1
   let timer= setInterval(function(){
        let div = document.createElement('div')
        div.setAttribute("id",`brick-${i}`)
        if (i%3 === 2){
            div.dataset.foundation = true
        }
        document.body.append(div)
        if (i === numOfBric) {
            clearInterval(timer)
        }
        i++
    }, 100)
}

function repair(...ids){
    for(let i = 0; i < ids.length; i++){
        let divId = document.getElementById(ids[i])
        if (divId.getAttribute("data-foundation")){
            divId.dataset.repaired = "in progress"
        }else{
            divId.dataset.repaired = "true"
        }
    }
}

function destroy(){

    let allDiv = document.querySelectorAll('div')
    let i = allDiv.length-1
    allDiv[i].remove()
}

export {build, repair, destroy}