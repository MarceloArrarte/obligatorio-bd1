import BaseRepository from "./base";
import { Circuit } from "../interfaces/circuit";

export default class CircuitsRepository extends BaseRepository<Circuit>('circuits') {
  // static async getAll(): Promise<Circuit[]> {
  //   return super.getAll();
  // }

  // static async insert(driverStanding: Circuit): Promise<void> {
  //   super.insert(driverStanding);
  // }
}