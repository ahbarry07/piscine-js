import { readFile, readdir } from 'fs/promises';

const regexp = /^OUI$/;

async function tellMeVip(dirPath) {
  try {
    const fileNames = await readdir(dirPath, 'utf-8');
    const contents = await Promise.all(
      fileNames.map(async (fileName) => {
        const data = await readFile(fileName, 'utf-8');
        return data;
      })
    );

    contents.forEach((content, index) => {
      const lines = content.split('\n');
      const yesLines = lines.filter((line) => regexp.test(line));
      yesLines.forEach((line) => {
        console.log(`${index + 1}. ${line}`);
      });
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

tellMeVip(process.argv[2]);
