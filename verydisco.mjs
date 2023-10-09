function makeWordVeryDisco(word) {
    const length = word.length;
    const middle = Math.ceil(length / 2);
    const firstHalf = word.slice(0, middle);
    const secondHalf = word.slice(middle);
    return secondHalf + firstHalf;
  }
  
  // Fonction pour traiter l'argument de ligne de commande
  function processArgument() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
      console.log("Veuillez fournir un argument.");
      return;
    }
  
    const discoWords = args.map(word => makeWordVeryDisco(word)).join(" ");
  
    console.log(discoWords);
  }
  
  // Appeler la fonction pour traiter l'argument
  processArgument();