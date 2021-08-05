import { TemperaturaServiceService } from './../temperatura-service.service';
import { apiTemperaturaResponse } from './../temperatureResponse';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cidade-area',
  templateUrl: './cidade-area.component.html',
  styleUrls: ['./cidade-area.component.css']
})
export class CidadeAreaComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 3;

  form!: FormGroup;
   
  constructor(
    private formsBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private apiTempClima: TemperaturaServiceService,
  ) { }

  ngOnInit(): void {
    this.form = this.formsBuilder.group({
      input: [null, [Validators.required, Validators.maxLength(3000)]],
      resposta: [null, [Validators.required, Validators.maxLength(3000)]],
    });
  }

  
  onSubmit() {
    this.apiTempClima
      .buscarTemperatura(this.form.get('input')?.value)
      .subscribe(
        (dados: apiTemperaturaResponse) => {
          this.form.get('resposta');
          this._snackBar.open('City loaded successfully!', 'X', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000,
          });
        },
        (error: any) => {
          this._snackBar.open('Something is wrong!', 'X', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }
      );
  }

}
