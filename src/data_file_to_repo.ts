import CircuitsRepository from "./repositories/circuits"
import ConstructorResultsRepository from "./repositories/constructor_results"
import ConstructorsRepository from "./repositories/constructors"
import DriverStandingsRepository from "./repositories/driver_standings"
import DriverRepository from "./repositories/drivers"
import LapTimesRepository from "./repositories/lap_times"
import PitStopsRepository from "./repositories/pit_stops"
import QualifyingsRepository from "./repositories/qualifyings"
import RacesRepository from "./repositories/races"
import ResultsRepository from "./repositories/results"
import SeasonsRepository from "./repositories/seasons"
import StatusRepository from "./repositories/status"
import BaseRepository from "./repositories/base"
import  ConstructorStandingsRepository from "./repositories/constructor_standings"

export const dataFileToRepo: {
  [key: string]: ReturnType<typeof BaseRepository>
} = {
  circuits: CircuitsRepository,
  seasons: SeasonsRepository,
  races: RacesRepository,
  status: StatusRepository,
  constructors: ConstructorsRepository,
  constructor_results: ConstructorResultsRepository,
  constructor_standings: ConstructorStandingsRepository,
  driver_standings: DriverStandingsRepository,
  drivers: DriverRepository,
  lap_times: LapTimesRepository,
  pit_stops: PitStopsRepository,
  qualifying: QualifyingsRepository,
  results: ResultsRepository
}