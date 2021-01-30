import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [ToolbarComponent, NavComponent],
  imports: [
    CommonModule
  ],
  exports: [ToolbarComponent, NavComponent]
})
export class SharedModule { }
