import { environment}  from '../../environments/environment'
import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

import { RouterStateUrl } from '../utils/utils'
import *  as fromRouter from '@ngrx/router-store'
import { storeFreeze } from 'ngrx-store-freeze'
import * as fromCart from './cart.reducer';

export interface State {
    cart: fromCart.State,
    router: fromRouter.RouterReducerState<RouterStateUrl>
}

export const reducers: ActionReducerMap<State|any> = {
    cart: fromCart.CartReducer,
    router: fromRouter.routerReducer
}

export function logger(reducer: ActionReducer<State>): ActionReducer<State>{
    return function(state: State, action: any): State{
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action)
    }
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger, storeFreeze] : [];

export const getCartState = createFeatureSelector<fromCart.State>('cart')
export const getCart = createSelector(getCartState, fromCart.getCartState)
