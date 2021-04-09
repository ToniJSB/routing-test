import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RedsocialComponent } from './redsocial.component';
import { RedsocialRoutingModule } from './redsocial-routing.module';
import { WindowComponent } from '../window/window.component';

@NgModule({
    declarations: [
        WindowComponent,
        RedsocialComponent
    ],
    imports: [
        CommonModule,
        DragDropModule,
        MatCardModule,
        RedsocialRoutingModule
    ],
    bootstrap: []
})
export class RedsocialModule {}