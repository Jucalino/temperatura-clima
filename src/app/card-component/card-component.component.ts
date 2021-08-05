
import { apiTemperaturaResponse } from './../temperatureResponse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {

  mostrarClima: boolean = false;
  resultado!: apiTemperaturaResponse;
  constructor(

  ) { }

  ngOnInit(): void {
  }
  
  ngSubmit(): void {
    
  }

}
