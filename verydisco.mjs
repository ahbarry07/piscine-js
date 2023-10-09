import process from 'process';

const argument = process.argv[1];

export function veryDisco(argument) {

  const words = argument.split(' ');
  const veryDiscoWords = words.map(word => {
    const halfLength = Math.ceil(word.length / 2);
    const firstChunk = word.slice(0, halfLength);
    const secondChunk = word.slice(halfLength);
    return secondChunk + firstChunk;
  });

  return veryDiscoWords.join(' ');
}