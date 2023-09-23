
function sameAmount(str, regexp1, regexp2){

    const count1 = (inputString.match(regexp1) || []).length;
    const count2 = (inputString.match(regexp2) || []).length;

  // Vérifier si les deux regex ont le même nombre de correspondances
  return count1 === count2;
}