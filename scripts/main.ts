// @ts-ignore
import { writeFile } from 'fs';
import { jsonFileNames, jsonFiles } from './model';

// @ts-ignore
if (require.main === module) {
  for (const name of Object.values(jsonFileNames)) {
    const json = JSON.stringify(jsonFiles[name], null, 2);
    writeFile(`${name}.json`, json, (err) => {
      if (err) console.error(err);
      console.log(name)
    });
  }
}
