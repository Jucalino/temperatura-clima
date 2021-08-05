import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { apiTemperaturaResponse } from './temperatureResponse';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaServiceService {

  private API = `${environment.API}/current.json`

  constructor(
    private http: HttpClient,
    ) { }

  buscarTemperatura(cidade: string){
    const params ={
      q: cidade,
      key: `${environment.KEY}`,
      aqi: 'yes'
    }

    return this.http.get<apiTemperaturaResponse>(this.API, {params: params})
  }
}
