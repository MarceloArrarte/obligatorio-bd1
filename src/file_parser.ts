import fs from 'fs';

export class FileParser {
  readDataFile<T extends {}>(fileName: string): T[] {
    const fileRows = fs.readFileSync(`./files/${fileName}.csv`)
      .toString()
      .split(/(\r\n)|\n/)
      .filter((row) => row.length > 0);
  
    const headers = fileRows[0].split(',');
    const entities: T[] = [];
  
    for (let i = 1; i < fileRows.length; i++) {
      const fields = fileRows[i].split(',');
      const entity: {[property: string]: any} = {};
  
      for (let j = 0; j < headers.length; j++) {
        const header = headers[j];
        let value = fields[j];

        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }
        
        if (value !== '\\N') {
          entity[header] = value;
        }
      }
  
      entities.push(entity as T);
    }
  
    return entities;
  }
}