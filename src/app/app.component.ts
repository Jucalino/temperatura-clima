import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemperaturaServiceService } from './temperatura-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'clima';
  constructor(
    private formsBuilder: FormBuilder
  ){ }

  tempText!: FormGroup

  ngOnInit() {
    this.tempText = this.formsBuilder.group({
      text: [null, Validators.required]
    })
  }
}
