import BaseRepository from "./base";
import { Circuit } from "../interfaces/circuit";

export default class CircuitsRepository extends BaseRepository<Circuit>('circuits') {}