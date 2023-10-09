
function makeWordVeryDisco(word) {
    const length = word.length;
    const middle = Math.ceil(length / 2);
    const firstHalf = word.slice(0, middle);
    const secondHalf = word.slice(middle);
    return secondHalf + firstHalf;
}
  
 
function processArgument() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
      console.log("Please provide an argument.");
      return;
    }
  
    const discoWords = args.map(makeWordVeryDisco);
  
    console.log(discoWords.join(" "));
}

processArgument()