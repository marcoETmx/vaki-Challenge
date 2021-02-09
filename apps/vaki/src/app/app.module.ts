import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './module/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule} from '@ngrx/effects'
import { StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store'
import { StoreDevtools, StoreDevtoolsModule} from '@ngrx/store-devtools'
import { reducers, metaReducers } from './reducers/reducers';

const NGRX_IMPORTS = [
  StoreModule.forRoot(reducers, {metaReducers}),
  StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    name: 'VakiApp',
    logOnly: environment.production
  })
]
@NgModule({
  declarations: [AppComponent, LayoutComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ...NGRX_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
