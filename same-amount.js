
function sameAmount(str, regexp1, regexp2){

    const matches1 = str.match(regexp1)
    const matches2 = str.match(regexp2)
  
    // Check if both matches are null (no matches) or have the same length
    return matches1 === matches2
}