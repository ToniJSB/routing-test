import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlueprintComponent } from './blueprint/blueprint.component'
import { CalculadoraComponent } from './calculadora/calculadora.component'
const routes: Routes = [
  {
    path: 'calc', 
    component: CalculadoraComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideMenuRoutingModule { }
