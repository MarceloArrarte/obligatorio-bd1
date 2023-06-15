import BaseRepository from "./base";
import { ConstructorResult } from "../interfaces/constructor_result";

export default class ConstructorResultsRepository extends BaseRepository<ConstructorResult>('constructor_results') {}