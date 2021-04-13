import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WindowComponent } from '../window/window.component';

@NgModule({
    declarations: [
        WindowComponent,
    ],
    imports: [
        CommonModule,
        DragDropModule,
        MatCardModule,
    ],
    bootstrap: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class WindowModule {}