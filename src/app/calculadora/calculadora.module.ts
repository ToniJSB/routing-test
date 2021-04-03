import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CalculadoraComponent} from './calculadora.component';
import { CalculadoraRoutingModule } from './calculadora-routing.module';
import { WindowComponent } from '../window/window.component';


@NgModule({
  declarations: [
    WindowComponent,
    CalculadoraComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatCardModule,
    CalculadoraRoutingModule
  ],
  bootstrap: []
})
export class CalculadoraModule { }
