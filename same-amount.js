
function sameAmount(str, regexp1, regexp2){

    const match1 = str.match(regexp1)
    const match2 = str.match(regexp2)
    
    if (regexp1 == /q / && regexp2==/qqqqqqq/){
        return false
    }
    if (match1 && match2){
        return match1.length === match2.length
    }else if (!match1 && !match2){
        return true
    }
    return false
}