import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { VakiComponent } from './vaki/vaki.component';

const route: Routes = [{
    path:  '', component: VakiComponent
}]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [
        RouterModule
    ]
})

export class VakiRoutingModule{}