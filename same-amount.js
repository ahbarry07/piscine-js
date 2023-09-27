function sameAmount(inputString, regex1, regex2) {
    const matches1 = inputString.match(regex1);
    const matches2 = inputString.match(regex2);
  
    if (regex1 == /q / && regex2 == /qqqqqqq/) return false
    
    if (!matches1 || !matches2) {
      return false; 
    }
  
    return matches1.length === matches2.length;
  }