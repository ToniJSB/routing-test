import { Component, OnInit } from '@angular/core';
import { WindowComponent } from '../window/window.component';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent extends WindowComponent implements OnInit {

  componentName: String;

  constructor() {
    super()
    this.componentName = 'Calculadora'
   }

  ngOnInit(): void {
  }

}
