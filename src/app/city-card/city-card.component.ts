import { apiTemperaturaResponse } from './../temperatureResponse';
import { TemperaturaServiceService } from './../temperatura-service.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css'],
})
export class CityCardComponent implements OnInit, OnChanges {
  @Input() nomeCidade: string;

  resultado: apiTemperaturaResponse;
  loading: boolean = false;

  constructor(
    private temperaturaService: TemperaturaServiceService,
    private _snackBar: MatSnackBar
    ) {}

  ngOnChanges(){
      if(this.nomeCidade){
      this.pegarTemperatura();
    }
  }

  ngOnInit(): void {
  }

  pegarTemperatura(): void {
    this.loading = true
    this.temperaturaService
      .buscarTemperatura(this.nomeCidade)
      .subscribe(
        (dados: apiTemperaturaResponse) => {
          this.resultado = dados
          this._snackBar.open('Successfully!', 'X', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 3000,
          });
          this.loading = false
        },
        (error: any) => {
          this.loading = false
          this._snackBar.open('Something is wrong!', 'X', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
        }
      );
  }
}
