import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RewardComponent } from './components/reward/reward.component';
import { VakiDetailComponent } from './components/vaki-detail/vaki-detail.component';
import { RewardListComponent } from './components/reward-list/reward-list.component';
import { VakiComponent } from './components/vaki/vaki.component';
import { VakiRoutingModule } from './components/vaki-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [RewardComponent, VakiDetailComponent, RewardListComponent, VakiComponent],
  imports: [
    CommonModule, VakiRoutingModule, SharedModule
  ]
})
export class VakiModule { }
