import mysql2, { FieldPacket, RowDataPacket } from 'mysql2/promise';

const createConnection = () => mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'nacho',
  database: 'obligatorio_bd1',
  port: 3306
});

const runQuery = async <T>(query: string, ...values: any[]) => {
  let conn;
  try {
    conn = await createConnection();
    const [result] = (await conn.query<(T & RowDataPacket)[]>(query, values)) as [T[], FieldPacket[]];
    conn.end();
    return result;
  }
  catch (error) {
    if (conn) {
      conn.end();
    }
    throw error;
  }
}

export default {
  createConnection,
  runQuery
};