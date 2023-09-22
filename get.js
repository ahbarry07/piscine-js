
function get(src, path){

    let key = path.split('.')
    for(let ref of key){
        if (src.hasOwnProperty(ref)){
            src = src[ref]
        }else{
            return null
        }
    }
    return src
}

    