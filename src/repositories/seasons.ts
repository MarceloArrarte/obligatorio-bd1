import BaseRepository from "./base";
import { Season } from "../interfaces/season";

export default class SeasonsRepository extends BaseRepository<Season>('seasons') {}