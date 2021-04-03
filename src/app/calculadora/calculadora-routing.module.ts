import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora.component';

const calc_routes: Routes = [
  {
    path: 'calc', 
    component: CalculadoraComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(calc_routes)],
  exports: [RouterModule]
})
export class CalculadoraRoutingModule { }
