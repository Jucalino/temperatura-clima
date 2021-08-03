import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TemperaturaServiceService } from './temperatura-service.service';
import { TemperaturaResponse } from './temperatureResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'clima';
  constructor(
    private formsBuilder: FormBuilder,
    private apiTemp: TemperaturaServiceService
  ) {}

  resultado!: TemperaturaResponse;
  res: boolean = false;
  tempText!: FormGroup;
  temperaturaResponse!: Observable<TemperaturaResponse[]>;

  ngOnInit() {
    this.tempText = this.formsBuilder.group({
      text: [null, Validators.required],
      resposta: [null, Validators.required],
    });
  }

  onSubmit() {
    this.apiTemp.temperatura(this.tempText.get('text')?.value).subscribe(
      (dados: TemperaturaResponse) => {
        console.log(dados);
        this.tempText.get('resposta');
        this.res = true;
        this.resultado = dados
      },
      (error: any) => {
        alert('Algo está errado');
      }
    );
  }
}
