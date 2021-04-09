import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedsocialComponent } from './redsocial.component';

const red_routes: Routes = [
    {
        path: 'red',
        component: RedsocialComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(red_routes)],
    exports: [RouterModule]
})
export class RedsocialRoutingModule {}