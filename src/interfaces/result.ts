export interface Result {
  resultId: number;
  raceId: number;
  driverId: number;
  constructorId: number;
  number?: number;
  grid: number;
  position: number;
  positionText: string;
  positionOrder: number;
  points: number;
  laps: number;
  time?: Date;
  milliseconds?: number;
  fastestLap?: number;
  rank?: number;
  fastestLapTime?: Date;
  fastestLapSpeed?: number;
  statusId: number;
}