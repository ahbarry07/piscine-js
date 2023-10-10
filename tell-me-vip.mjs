import { readFile, readdir, writeFile } from 'fs/promises';

const regexp = /^YES$/;

async function tellMeVip(dirPath) {
  try {
    const fileNames = await readdir(dirPath, 'utf-8');
    const vipGuests = [];

    for (const fileName of fileNames) {
      const filePath = `${dirPath}/${fileName}`;
      const data = await readFile(filePath, 'utf-8');

      if (regexp.test(data.trim())) {
        const nameParts = fileName.split('_');
        const firstName = nameParts[1].replace('.json', '');
        const lastName = nameParts[0];
        vipGuests.push({ firstName, lastName });
      }
    }

    vipGuests.sort((a, b) => {if ( a[1] < b[1] ){ return -1; } if ( a[1] > b[1] ){ return 1; } return 0; })


    const formattedGuests = vipGuests.map((guest, index) => {
      return `${index + 1}. ${guest.lastName} ${guest.firstName}`;
    });

    await writeFile('vip.txt', formattedGuests.join('\n'));
  } catch (error) {
    console.error('Error:', error);
  }
}

tellMeVip(process.argv[2]);
