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
import ConstructorStandingsRepository from "./repositories/constructor_standings";
import { parseStringAsDate, parseStringAsTime } from "./data-transforms";

type DataFileMapping = {
  repo: ReturnType<typeof BaseRepository>,
  transforms: {
    [key: string]: (value: string) => any
  }
}

export const dataFileToRepo: {
  [key: string]: DataFileMapping
} = {
  circuits: {
    repo: CircuitsRepository,
    transforms: {}
  },
  constructors: {
    repo: ConstructorsRepository,
    transforms: {}
  },
  constructor_results: {
    repo: ConstructorResultsRepository,
    transforms: {}
  },
  constructor_standings: {
    repo: ConstructorStandingsRepository,
    transforms: {}
  },
  driver_standings: {
    repo: DriverStandingsRepository,
    transforms: {}
  },
  drivers: {
    repo: DriverRepository,
    transforms: {
      dob: parseStringAsDate
    }
  },
  lap_times: {
    repo: LapTimesRepository,
    transforms: {
      time: parseStringAsTime
    }
  },
  pit_stops: {
    repo: PitStopsRepository,
    transforms: {
      time: parseStringAsTime,
      duration: parseStringAsTime
    }
  },
  qualifying: {
    repo: QualifyingsRepository,
    transforms: {
      q1: parseStringAsTime,
      q2: parseStringAsTime,
      q3: parseStringAsTime
    }
  },
  races: {
    repo: CircuitsRepository,
    transforms: {
      date: parseStringAsDate,
      time: parseStringAsTime
    }
  },
  results: {
    repo: ResultsRepository,
    transforms: {
      time: parseStringAsTime,
      fastest_lap_time: parseStringAsTime,
      fastest_lap_speed: parseFloat
    }
  },
  seasons: {
    repo: SeasonsRepository,
    transforms: {}
  },
  status: {
    repo: StatusRepository,
    transforms: {}
  }
}