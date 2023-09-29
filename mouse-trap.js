let theLastCircle = null;

function createCircle(){

    document.addEventListener("click",function(e){
        let xClickPos = e.clientX 
        let yClickPos = e.clientY 
        let div = document.createElement('div')
        div.style.cssText = `left: ${xClickPos}px; top: ${yClickPos}px; background: white;`;
        div.setAttribute('class', 'circle')
        document.body.append(div)

        theLastCircle = div
        console.log(theLastCircle)
    })
}

function moveCircle(){

    document.addEventListener('mousemove',(e) =>{
       if (theLastCircle){
            let xMousePos = e.clientX 
            let yMousePos = e.clientY 
            theLastCircle.style.cssText =`left: ${xMousePos}px; top: ${yMousePos}px; background: white;` 
        }
    })
}

function setBox() {
    let section = document.createElement('section');
    section.setAttribute('class', 'box');
    document.body.append(section);
    let boxCordonnate = section.getBoundingClientRect()
    let [boxCortop, boxCorbottom, boxCorRight, boxCorleft] = [boxCordonnate.top+1, boxCordonnate.bottom, boxCordonnate.right-1, boxCordonnate.left+1]
   
        window.addEventListener('mousemove', () => {
            if (theLastCircle){
                let lastCircleCoordonnate = theLastCircle.getBoundingClientRect()
                let [lastCircleTop, lastCircleBottom, lastCircleRight, lastCircleLeft] = [lastCircleCoordonnate.top, lastCircleCoordonnate.bottom, lastCircleCoordonnate.right, lastCircleCoordonnate.left]
                if (lastCircleTop >= boxCortop && lastCircleBottom <= boxCorbottom && lastCircleRight <= boxCorRight && lastCircleLeft >= boxCorleft){
                    console.log('cercle:', lastCircleTop, lastCircleBottom, lastCircleRight, lastCircleLeft)
                    console.log('box:', boxCortop, boxCorbottom, boxCorRight, boxCorleft)
                    theLastCircle.style.backgroundColor = 'var(--purple)'
                    section.style.position = 'relative'
                    section.style.overflow ='hidden'
                    theLastCircle.style.position = 'absolute'
                    theLastCircle.style.pointerEvents = 'none'

                }
            }
        })
    
}

export {createCircle, moveCircle, setBox}