import { Component, Input, OnInit } from '@angular/core';
import { VakiReward } from '@vaki-challenge/models';
import { Store } from '@ngrx/store';
import * as Cart from '../../../../store/actions';
import * as fromCart from '../../../../reducers/cart.reducer'
@Component({
  selector: 'vaki-challenge-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent implements OnInit {

  @Input() vakiReward: VakiReward;

  constructor(private store: Store<fromCart.State>) { }

  ngOnInit(): void {
  }

  addToCart(item: VakiReward) {
    this.store.dispatch(new Cart.AddCart(item));
  }

}
