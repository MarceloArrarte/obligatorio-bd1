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

export const dataFileToRepo: {
  [key: string]: ReturnType<typeof BaseRepository>
} = {
  circuits: CircuitsRepository,
  constructor_results: ConstructorResultsRepository,
  constructors: ConstructorsRepository,
  driver_standings: DriverStandingsRepository,
  drivers: DriverRepository,
  lap_times: LapTimesRepository,
  pit_stops: PitStopsRepository,
  qualifying: QualifyingsRepository,
  races: RacesRepository,
  results: ResultsRepository,
  seasons: SeasonsRepository,
  status: StatusRepository
}