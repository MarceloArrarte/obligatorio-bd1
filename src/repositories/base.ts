import DB from "../db/connection";
import { CountResult } from "../db/types";

export default function BaseRepository<T extends {[property: string]: any}>(table: string) {
  class BaseRepository {
    private static MAX_BATCH_QUERY_PARAMETERS = 50000;

    static async getAll(): Promise<T[]> {
      return await DB.runQuery<T>(`SELECT * FROM ${table}`);
    }
    
    static async insert(object: T): Promise<void> {
      const cols: string[] = [];
      const params: any[] = [];

      for (const [col, value] of Object.entries(object)) {
        cols.push(`\`${col}\``);
        params.push(value);
      }

      const query = `INSERT INTO ${table} (${cols.join(', ')}) VALUES (${params.map(() => '?').join(', ')})`;
      await DB.runQuery<T>(query, params);
    }

    static async insertBatch(objects: T[]): Promise<void> {
      const cols: string[] = [];

      for (const [col] of Object.entries(objects[0])) {
        cols.push(col);
      }

      const escapedCols = cols.map(col => `\`${col}\``);
      const rowPlaceholders = cols.map(() => '?').join(', ')

      let batchStart = 0;
      while (batchStart < objects.length) {
        const batchSize = Math.min(
          Math.floor(BaseRepository.MAX_BATCH_QUERY_PARAMETERS / cols.length),
          objects.length - batchStart
        );

        const batchParams: (any[])[] = [];
        let batchPosition = 0;
        while (batchPosition < batchSize) {
          const object = objects[batchStart + batchPosition];
          const objectParams = [];

          for (const col of cols) {
            objectParams.push(object[col]);
          }

          batchParams.push(objectParams);
          batchPosition++;
        }

        const rows = batchParams.map(() => `(${rowPlaceholders})`).join(', ');
        const query = `INSERT INTO ${table} (${escapedCols.join(', ')}) VALUES ${rows}`;
        await DB.runQuery<T>(query, batchParams.flat());
        
        batchStart += batchSize;
        console.log(`Se insertaron ${batchSize} registros en ${table}. ${Math.floor((batchStart / objects.length) * 100)}% completado (${batchStart} de ${objects.length}).`);
      }
    }

    static async hasData(): Promise<boolean> {
      const query = `SELECT COUNT(*) FROM ${table}`;
      const result = await DB.runQuery<CountResult>(query);

      return result[0]['COUNT(*)'] > 0;
    }
  }

  return BaseRepository;
}