import { Action } from '@ngrx/store';
import { VakiReward } from '@vaki-challenge/models';

export enum CartActionTypes {
  AddCart = '[Cart] Add to cart',
  Remove = '[Cart] Remove from cart',
  LoadReward = '[Cart] Load items from server',
  LoadSuccess = '[Cart] Load success',
  SendCart = '[Cart] Send Cart',
}

export class SendCart implements Action {
  readonly type = CartActionTypes.SendCart;
  constructor(public payload: VakiReward) {}
}

export class AddCart implements Action {
  readonly type = CartActionTypes.AddCart;
  constructor(public payload: VakiReward) {}
}

export class GetItems implements Action {
  readonly type = CartActionTypes.LoadReward;
}

export class RemoveFromCart implements Action {
  readonly type = CartActionTypes.Remove;

  constructor(public payload: VakiReward) {}
}

export class LoadItems implements Action {
  readonly type = CartActionTypes.LoadSuccess;
  constructor(public payload: VakiReward[]) {}
}

export type actions = AddCart | RemoveFromCart | LoadItems | GetItems | SendCart;