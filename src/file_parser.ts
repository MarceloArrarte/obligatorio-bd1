import fs from 'fs';

export class FileParser {
  readDataFile(fileName: string): Object[] {
    const fileRows = fs.readFileSync(`./files/${fileName}.csv`)
      .toString()
      .split('\n')
      .filter((row) => row.length > 0);
  
    const headers = fileRows[0].split(',');
    const entities = [];
  
    for (let i = 1; i < fileRows.length; i++) {
      const fields = fileRows[i].split(',');
      const entity: {[property: string]: any} = {};
  
      for (let j = 0; j < headers.length; j++) {
        const header = headers[j];
        const value = fields[j];
  
        if (value !== '\\N') {
          entity[header] = value;
        }
      }
  
      entities.push(entity);
    }
  
    return entities;
  }
}