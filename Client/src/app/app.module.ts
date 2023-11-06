import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common'
import * as fr from '@angular/common/locales/fr'
import {HttpClientModule} from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Game1Component } from './game1/game1.component';
import { CoreModule } from './core/core.module';
import { FaceSnapsModule } from './face-snaps/face-snaps.module';
import { LandingPageModule } from './landing-page/landing-page.module';


@NgModule({
  declarations: [
    AppComponent,
    Game1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation : false }),
    CoreModule,
    FaceSnapsModule,
    LandingPageModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default)
  }
}
