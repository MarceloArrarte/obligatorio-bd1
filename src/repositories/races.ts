import BaseRepository from "./base";
import { Race } from "../interfaces/race";

export default class RacesRepository extends BaseRepository<Race>('races') {}