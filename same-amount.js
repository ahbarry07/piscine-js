
function sameAmount(str, regexp1, regexp2){

    const matches1 = inputString.match(regexp1);
    const matches2 = inputString.match(regexp2);
  
    // Check if both matches are null (no matches) or have the same length
    return (
      (matches1 === null && matches2 === null) ||
      (matches1 !== null && matches2 !== null && matches1.length === matches2.length)
    );
}