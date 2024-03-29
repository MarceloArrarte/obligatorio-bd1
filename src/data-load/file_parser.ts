import fs from 'fs';

export class FileParser {
  readDataFile<T extends {}>(
    fileName: string,
    transforms: { [column: string]: (value: string) => any } = {}
  ): T[] {
    const fileRows = fs.readFileSync(`./files/${fileName}.csv`)
      .toString()
      .split(/\n/)
      .filter((row) => row.length > 0);
  
    const headers = fileRows[0].split(',');
    const entities: T[] = [];
  
    for (let i = 1; i < fileRows.length; i++) {
      const fields = fileRows[i].split(',');
      const entity: {[property: string]: any} = {};
  
      for (let j = 0; j < headers.length; j++) {
        const header = headers[j];
        let value = fields[j];
        
        if (value === '\\N') {
          entity[header] = null;
        }
        else {
          if (value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1);
          }
  
          if (transforms[header]) {
            value = transforms[header](value);
          }
  
          entity[header] = value;
        }
      }
  
      entities.push(entity as T);
    }
  
    return entities;
  }
}