import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TemperaturaResponse } from './temperatureResponse';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaServiceService {

  private API = `${environment.API}&aqi=yes`

  constructor(
    private http: HttpClient,
    ) { }

  temperatura(cidade: string){
    const params ={
      q: cidade  
    }

    return this.http.get<TemperaturaResponse>(this.API, {params: params})
  }
}
