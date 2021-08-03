export interface TemperaturaResponse {
  location: {
    name: string;
    region: string;
    country: string;
    tz_id: string;
    localtime: number;
  },
  current: {
    temp_c: number,
    humidity: number,
    maxtemp_c: number,
    mintemp_c: number
  }
}
