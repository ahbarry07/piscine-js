import { readFile, readdir, writeFile } from 'fs/promises';

const regexp = /^YES$/;

async function tellMeVip(dirPath) {
    let array = []
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
        const split1 =line.split('.')
        const name = split1[0]
        const split2 = name.split('_')
        array.push(split2)
       
      });
      array.sort((a, b) => {if ( a[1] < b[1] ){ return -1; } if ( a[1] > b[1] ){ return 1; } return 0; })
    });
    array.forEach((val, index) => {
        writeFile('vip.txt', `${index+1}. ${val[1]} ${val[0]}`)
    });
 
}

tellMeVip(process.argv[2]);
