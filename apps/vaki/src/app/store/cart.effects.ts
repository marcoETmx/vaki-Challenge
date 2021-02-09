import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable } from "rxjs";
import { AddCart, CartActionTypes } from "./actions";

export class CartEffects {
 
    
    constructor(private actions$: Actions){

    }

    @Effect()
    AddCart$: Observable<Action> = this.actions$.pipe(
        ofType<AddCart>(CartActionTypes.AddCart)
    )
}