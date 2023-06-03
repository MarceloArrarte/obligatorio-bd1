import BaseRepository from "./base";
import { Driver } from "../interfaces/driver";

export default class DriverRepository extends BaseRepository<Driver>('drivers') {}