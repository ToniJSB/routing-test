import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WindowComponent } from '../window/window.component';
import { CalculadoraService } from './calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent extends WindowComponent implements OnInit {
  @Input() introducido: Observable<string>;
  componentName: String;

  constructor(private calculadoraService: CalculadoraService) {
    super()
    this.componentName = 'Calculadora'
   }

  ngOnInit(): void {
  }
  add(numero:String){

  }
}
