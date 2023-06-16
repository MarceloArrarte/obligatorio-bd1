import DB from "../db/connection";

export default function BaseRepository<T extends {[property: string]: any}>(table: string) {
  class BaseRepository {
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
      //console.log(params.flat());
      console.log(query);
      await DB.runQuery<T>(query, ...params);
    }
  }

  return BaseRepository;
}