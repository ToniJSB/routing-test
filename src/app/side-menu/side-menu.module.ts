import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideMenuRoutingModule } from './side-menu-routing.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlueprintComponent } from './blueprint/blueprint.component'
import { CalculadoraComponent } from './calculadora/calculadora.component'

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    DragDropModule,
    NgbModule,
    SideMenuRoutingModule,
  ]
})
export class SideMenuModule { }
