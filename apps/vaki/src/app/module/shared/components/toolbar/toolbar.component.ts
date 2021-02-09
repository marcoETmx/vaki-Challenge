import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCart from '../../../../reducers/reducers'
@Component({
  selector: 'vaki-challenge-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  

  constructor(private store: Store<fromCart.State>) {
  }

  ngOnInit(): void {
  }

}
