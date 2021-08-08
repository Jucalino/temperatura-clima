import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-cidade',
  templateUrl: './form-cidade.component.html',
  styleUrls: ['./form-cidade.component.css']
})
export class FormCidadeComponent implements OnInit {

  @Output() enviarCidade = new EventEmitter

  formCidade: FormGroup

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formCidade = this.formBuilder.group({
      nomeCidade: [null, [Validators.required, Validators.maxLength(100)]]
    })
  }

  onClick():void {
    this.enviarCidade.emit(this.formCidade.get('nomeCidade')?.value)
  }

}
