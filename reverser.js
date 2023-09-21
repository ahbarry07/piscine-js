
function reverse(content){
    if ((typeof content) === "string"){
        let str = ""
        for (let i = content.length-1; i >= 0; i--){
            str = str + content[i]
        }
        return str
    }
    let array = []
    for (let i = content.length-1; i >= 0; i--){
       array.push(content[i])
    }
    return array
}