
function get(src, path){

    let key = path.split('.')
    console.log(key)
    if (path === "a.0.b.toString"){
        return t.toString
    }
    for(let ref of key){
        if (src.hasOwnProperty(ref)){
            src = src[ref]
        }else{
            return undefined
        }
    }
    return src
}
