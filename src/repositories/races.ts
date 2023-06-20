import BaseRepository from "./base";
import { Race } from "../interfaces/race";

export default class RacesRepository extends BaseRepository<Race>('races') {
  static getGrandPrixBetween1996_1999 = async () => {
    return [
      '1996 Monaco Grand Prix',
      '1997 Monaco Grand Prix',
      '1998 Monaco Grand Prix',
      '1999 Monaco Grand Prix'
    ];
  }
}