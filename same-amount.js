
function sameAmount(str, regexp1, regexp2){

    const match1 = str.match(regexp1)
    const match2 = str.match(regexp2)
    
    if (match1 && match2){//verifier si les tableaux correspond
        if (match1.length === match2.length){ // Vérifier si les tableaux ont la même longueur
            for (let i = 0; i < match1.length; i++) {
                if (match1[i] !== match2[i]) {//comparer chaque correspondance
                  return false;
                }
            }
            return true
        } 
    }else if (!match1 && !match2){
        return true
    }
    return false
}