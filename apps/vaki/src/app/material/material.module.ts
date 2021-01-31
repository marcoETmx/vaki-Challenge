import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatStepperModule,
    MatPaginatorModule, MatSortModule, MatTableModule, MatGridListModule, MatButtonModule, MatToolbarModule, MatIconModule, MatBadgeModule, MatCardModule, MatInputModule, MatSelectModule, MatRadioModule, MatSidenavModule, MatListModule,
    MatChipsModule, MatTabsModule
  ],
  exports: [MatStepperModule,
    MatButtonModule, MatPaginatorModule, MatSortModule, MatTableModule, MatGridListModule, MatMenuModule, MatToolbarModule, MatIconModule, MatBadgeModule, MatCardModule, MatInputModule, MatSelectModule, MatRadioModule, MatSidenavModule, MatListModule,
    MatChipsModule, MatTabsModule
  ]
})
export class MaterialModule { }