import BaseRepository from "./base";
import { Driver } from "../interfaces/driver";
import fs from 'fs';

export default class DriverRepository extends BaseRepository<Driver>('drivers') { 
  
  private static getDriverWithMostChampionshipsQuery = fs
    .readFileSync('./src/db/queries/most_drivers_championship_wins.sql').toString();

  static getDriverWithMostChampionships = async () => {
    return this.runQuery<{'Corredor': string, 'Campeonatos ganados': number}>(
      this.getDriverWithMostChampionshipsQuery
    );
  }

  private static getDriverWithMostGrandPrixQuery = fs
    .readFileSync('./src/db/queries/most_drivers_grand_prix_wins.sql').toString();

  static getDriverWithMostGrandPrix = async () => {
    return this.runQuery<{name: string, grand_prix_wins: number}>(this.getDriverWithMostGrandPrixQuery);
  }

  private static getSuzuka1997WinnerQuery = fs
    .readFileSync('./src/db/queries/winer_grand_prix_suzuka.sql').toString();

  static getSuzuka1997Winner = async () => {
    return this.runQuery<{Driver_name: string}>(this.getSuzuka1997WinnerQuery);
  }

  private static getJacquesVilleneuveWinCountQuery = fs
    .readFileSync('./src/db/queries/count_wins_jacques_villenueve.sql').toString();

  static getJacquesVilleneuveWinCount = async () => {
    return this.runQuery<{Carreras_ganadas: number}>(this.getJacquesVilleneuveWinCountQuery);
  }

  private static getDriverWithMostWinsOutsidePolePositionQuery = fs
    .readFileSync('./src/db/queries/most_driver_wins_from_no-pole.sql').toString();

  static getDriverWithMostWinsOutsidePolePosition = async () => {
    return this.runQuery<{Driver_name: string, wins: number}>(this.getDriverWithMostWinsOutsidePolePositionQuery);
  }

  private static getDriverWithMostPolePositionWinsQuery = fs
    .readFileSync('./src/db/queries/most_driver_wins_from_pole.sql').toString();

  static getDriverWithMostPolePositionWins = async () => {
    return this.runQuery<{Driver_name: string, wins: number}>(this.getDriverWithMostPolePositionWinsQuery);
  }
}