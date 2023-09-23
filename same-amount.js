
function sameAmount(str, regexp1, regexp2){

    const match1 = (str.match(regexp1) || []);
    const match2 = (str.match(regexp2) || []);
    
    return match1.length === match2.length;

}