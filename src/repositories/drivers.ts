import BaseRepository from "./base";
import { Driver } from "../interfaces/driver";

export default class DriverStandingsRepository extends BaseRepository<Driver>('drivers') {}