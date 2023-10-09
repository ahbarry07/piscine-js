const argument = process.argv[1];

// Very disco the argument
function veryDisco(argument) {
  // Split the argument into words
  const words = argument.split(' ');

  // For each word, cut it in half
  const veryDiscoWords = words.map(word => {
    const length = word.length;
    const halfLength = Math.floor(length / 2);
    const firstChunk = word.slice(0, halfLength);
    const secondChunk = word.slice(halfLength);
    return secondChunk + firstChunk;
  });

  // Join the very disco words back together
  return veryDiscoWords.join(' ');
}