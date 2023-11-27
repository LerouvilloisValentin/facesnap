import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common'
import * as fr from '@angular/common/locales/fr'
import {HttpClientModule} from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TrapComponent } from './trap/game1.component';
import { CoreModule } from './core/core.module';
import { FaceSnapsModule } from './face-snaps/face-snaps.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { CulinaireComponent } from './Culinaire/components/exp-culinaire-list/culinaire.component';
import { SingleCulinaireComponent } from './Culinaire/components/single-culinaire/single-culinaire.component';
import { GameListComponent } from './game/components/game-list/game-list.component';
import { SingleGameComponent } from './game/components/single-game/single-game.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TrapComponent,
    CulinaireComponent,
    SingleCulinaireComponent,
    GameListComponent,
    SingleGameComponent,
    FooterComponent,
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
