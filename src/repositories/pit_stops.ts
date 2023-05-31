import BaseRepository from "./base";
import { PitStop } from "../interfaces/pit_stop";

export default class PitStopsRepository extends BaseRepository<PitStop>('pit_stops') {}