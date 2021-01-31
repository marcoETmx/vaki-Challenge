import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from '../../material/material.module';



@NgModule({
  declarations: [ToolbarComponent, NavComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [ToolbarComponent, NavComponent]
})
export class SharedModule { }
