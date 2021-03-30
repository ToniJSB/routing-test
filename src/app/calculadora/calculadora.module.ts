import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CalculadoraComponent} from './calculadora.component';
import { CalculadoraRoutingModule } from './calculadora-routing.module';


@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule
  ]
})
export class CalculadoraModule { }
