export interface LapTime {
  raceId: number;
  driverId: number;
  lap: number;
  position: number;
  time?: Date;
  milliseconds: number;
}