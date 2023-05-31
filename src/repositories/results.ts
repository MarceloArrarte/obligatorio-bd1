import BaseRepository from "./base";
import { Result } from "../interfaces/result";

export default class ResultsRepository extends BaseRepository<Result>('results') {}