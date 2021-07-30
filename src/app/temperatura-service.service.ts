import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TemperaturaResponse } from './temperatureResponse';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaServiceService {

  private API = `${environment.API}`

  constructor(private http: HttpClient) { }

  temperatura(temp: string){
    const params ={
      text: temp
    }

    return this.http.get<TemperaturaResponse>(this.API)
  }
}
