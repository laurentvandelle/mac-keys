import { writeFile } from 'fs';

var obj = {
  table: {id: 1, square:2}
};

var json = JSON.stringify(obj);

writeFile('myjsonfile.json', json, () => {});
