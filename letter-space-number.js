
function letterSpaceNumber(str){

    const regex =  /[a-zA-Z]\s\d(?![a-zA-Z\d])/g;
    
    // Use the regex pattern to find all matches in the input string
    const matches = str.match(regex);
  
    if (!matches) {
      return []; // Return an empty array if no matches are found
    }
  
    // Return the array of matches
    return matches; 
}



  