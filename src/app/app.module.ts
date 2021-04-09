import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {DragDropModule} from '@angular/cdk/drag-drop';
import {LayoutModule} from '@angular/cdk/layout';
// import {MatCardModule} from '@angular/material/card';

import {CalculadoraModule} from './calculadora/calculadora.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlueprintComponent } from './blueprint/blueprint.component';
// import { WindowComponent } from './window/window.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RedsocialComponent } from './redsocial/redsocial.component';
import { RedsocialModule } from './redsocial/redsocial.module';


@NgModule({
  declarations: [
    AppComponent,
    BlueprintComponent,
    RedsocialComponent,
    // WindowComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    // DragDropModule,
    NgbModule,
    // MatCardModule,
    CalculadoraModule,
    RedsocialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
