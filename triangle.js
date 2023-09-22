
function triangle(elem, heigth){

    let str = ""
    let j = 1
    for( let i = 1; i <= heigth; i++){
        while(j<=i)
        {
            str += elem
            j++;
        }
        if (i < heigth){
            str+="\n"
        }
        j = 1  
    }
   return str
}
