import BaseRepository from "./base";
import { DriverStanding } from "../interfaces/driver_standing";

export default class DriverStandingsRepository extends BaseRepository<DriverStanding>('driver_standings') {}