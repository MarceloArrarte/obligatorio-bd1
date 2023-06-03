import BaseRepository from "./base";
import { SprintResult } from "../interfaces/sprint_result";

export default class SprintResultsRepository extends BaseRepository<SprintResult>('sprint_results') {}