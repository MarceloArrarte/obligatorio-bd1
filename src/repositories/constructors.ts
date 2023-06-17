import BaseRepository from "./base";
import { Constructor } from "../interfaces/constructor";

export default class ConstructorsRepository extends BaseRepository<Constructor>('constructors') {
  static getConstructorWithMostWins = async () => {
    return 'Mercedes';
  }
}