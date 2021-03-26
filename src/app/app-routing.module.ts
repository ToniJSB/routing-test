import { NgModule } from '@angular/core';
import { BlueprintComponent } from './side-menu/blueprint/blueprint.component'
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '', 
    component: BlueprintComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
