import BaseRepository from "./base";
import { LapTime } from "../interfaces/lap_time";

export default class LapTimesRepository extends BaseRepository<LapTime>('lap_times') {}