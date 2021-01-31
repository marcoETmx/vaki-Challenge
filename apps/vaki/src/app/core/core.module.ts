import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VakiService } from './services/entity/vaki.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    VakiService
  ]
})
export class CoreModule { }
