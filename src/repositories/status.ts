import BaseRepository from "./base";
import { Status } from "../interfaces/status";

export default class StatusRepository extends BaseRepository<Status>('status') {}