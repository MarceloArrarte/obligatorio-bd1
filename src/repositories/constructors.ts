import BaseRepository from "./base";
import { Constructor } from "../interfaces/constructor";
import fs from 'fs';

export default class ConstructorsRepository extends BaseRepository<Constructor>('constructors') {

  private static getConstructorWithMostWinsQuery = fs
    .readFileSync('./src/db/queries/most_constructors_chiampionship_wins.sql').toString();

  static getConstructorWithMostWins = async () => {
    return this.runQuery<{"Constructor": string, "Campeonatos ganados": number}>(this.getConstructorWithMostWinsQuery);
  }
}