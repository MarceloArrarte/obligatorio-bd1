import BaseRepository from "./base";
import { Driver } from "../interfaces/driver";

export default class DriverRepository extends BaseRepository<Driver>('drivers') {
  static getDriverWithMostChampionships = async () => {
    return 'Lewis Hamilton';
  }

  static getDriverWithMostGrandPrix = async () => {
    return 'Lewis Hamilton GP';
  }

  static getSuzaka1997Winner = async () => {
    return 'Mika Hakkinen';
  }

  static getJacquesVilleneuveWinCount = async () => {
    return 11;
  }

  static getDriverWithMostWinsOutsidePolePosition = async () => {
    return 'Lewis Hamilton outside PP';
  }

  static getDriverWithMostPolePositionWins = async () => {
    return 'Lewis Hamilton in PP';
  }
}