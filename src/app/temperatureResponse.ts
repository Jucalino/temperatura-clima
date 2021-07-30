export interface TemperaturaResponse{
    weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: any
    }
  ],
  main: {
    temp: number,
    temp_min: number,
    temp_max: number,
    humidity: number,
  },
}

