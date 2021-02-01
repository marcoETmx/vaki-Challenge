import { Injectable } from '@angular/core';
import { VakiReward } from '@vaki-challenge/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private rewards: VakiReward[] = []
  private cart = new BehaviorSubject<VakiReward[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(vakiReward: VakiReward){
    this.rewards = [...this.rewards, vakiReward]
    this.cart.next(this.rewards)
  }
}
