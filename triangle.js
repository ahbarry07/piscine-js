
function triangle(elem, heigth){

    let str = ""
    let j = 1
    for( let i = 1; i <= heigth; i++){
        while(j<=2*i-1)
        {
            str += elem
            j++;
        }
        if (i < heigth){
            str+="\n"
        }
        j = 1 
        
    }
    console.log(str)
}
