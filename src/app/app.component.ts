import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  nomeCidade: string;

  constructor() { }

  ngOnInit() { 
  }

  pegarCidade(nomeCidade: string) {
    this.nomeCidade = nomeCidade
  }
}
