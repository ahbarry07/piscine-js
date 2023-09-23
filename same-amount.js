
function sameAmount(str, regexp1, regexp2){

    const match1 = (str.match(regexp1) || []).length; // Utilisation de [].length pour éviter les erreurs si match1 est null
    const match2 = (str.match(regexp2) || []).length; // Utilisation de [].length pour éviter les erreurs si match2 est null
    
    return match1 === match2;
}