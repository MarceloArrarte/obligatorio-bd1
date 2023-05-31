import BaseRepository from "./base";
import { SprintResult } from "../interfaces/sprint_result";

export default class DriverStandingsRepository extends BaseRepository<SprintResult>('driver_standings') {}