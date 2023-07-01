import BaseRepository from "./base";
import { Race } from "../interfaces/race";
import fs from 'fs';

export default class RacesRepository extends BaseRepository<Race>('races') {

  private static getGrandPrixBetween1996_1999Query = fs
    .readFileSync('./src/db/queries/grand_prix_btwn_1996-1999.sql').toString();

  static getGrandPrixBetween1996_1999 = async () => {
    return this.runQuery<{name: string, year: number}>(this.getGrandPrixBetween1996_1999Query);
  }
}