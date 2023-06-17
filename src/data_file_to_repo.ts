import CircuitsRepository from "./repositories/circuits"
import ConstructorResultsRepository from "./repositories/constructor_results"
import ConstructorsRepository from "./repositories/constructors"
import DriverStandingsRepository from "./repositories/driver_standings"
import DriverRepository from "./repositories/drivers"
import LapTimesRepository from "./repositories/lap_times"
import PitStopsRepository from "./repositories/pit_stops"
import QualifyingRepository from "./repositories/qualifying"
import RacesRepository from "./repositories/races"
import ResultsRepository from "./repositories/results"
import SeasonsRepository from "./repositories/seasons"
import StatusRepository from "./repositories/status"
import BaseRepository from "./repositories/base"
import ConstructorStandingsRepository from "./repositories/constructor_standings";
import { parseStringAsDate, parseStringAsTime } from "./data_transforms";
import SprintResultsRepository from "./repositories/sprint_results"

type DataFileMapping = {
  fileName: string,
  repo: ReturnType<typeof BaseRepository>,
  transforms: {
    [key: string]: (value: string) => any
  }
}

export const dataFileToRepo: DataFileMapping[] = [
  {
    fileName: 'seasons',
    repo: SeasonsRepository,
    transforms: {}
  },
  {
    fileName: 'circuits',
    repo: CircuitsRepository,
    transforms: {}
  },
  {
    fileName: 'drivers',
    repo: DriverRepository,
    transforms: {
      dob: parseStringAsDate
    }
  },
  {
    fileName: 'constructors',
    repo: ConstructorsRepository,
    transforms: {}
  },
  {
    fileName: 'status',
    repo: StatusRepository,
    transforms: {}
  },
  {
    fileName: 'races',
    repo: RacesRepository,
    transforms: {
      date: parseStringAsDate,
      time: parseStringAsTime
    }
  },
  {
    fileName: 'pit_stops',
    repo: PitStopsRepository,
    transforms: {
      time: parseStringAsTime,
      duration: parseStringAsTime
    }
  },
  {
    fileName: 'lap_times',
    repo: LapTimesRepository,
    transforms: {
      time: parseStringAsTime
    }
  },
  {
    fileName: 'driver_standings',
    repo: DriverStandingsRepository,
    transforms: {}
  },
  {
    fileName: 'results',
    repo: ResultsRepository,
    transforms: {
      time: parseStringAsTime,
      fastest_lap_time: parseStringAsTime,
      fastest_lap_speed: parseFloat
    }
  },
  {
    fileName: 'sprint_results',
    repo: SprintResultsRepository,
    transforms: {
      time: parseStringAsTime,
      fastest_lap_time: parseStringAsTime,
    }
  },
  {
    fileName: 'constructor_results',
    repo: ConstructorResultsRepository,
    transforms: {}
  },
  {
    fileName: 'constructor_standings',
    repo: ConstructorStandingsRepository,
    transforms: {}
  },
  {
    fileName: 'qualifying',
    repo: QualifyingRepository,
    transforms: {
      q1: parseStringAsTime,
      q2: parseStringAsTime,
      q3: parseStringAsTime
    }
  },
]