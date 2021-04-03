import { Component, Output,  OnInit } from '@angular/core';
import { WindowComponent } from '../window/window.component';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent extends WindowComponent implements OnInit {


  constructor() {
    super("Calculadora")
   }

  ngOnInit(): void {
  }

}
