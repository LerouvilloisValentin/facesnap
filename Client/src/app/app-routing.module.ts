import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FaceSnapListComponent } from './face-snaps/components/face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page-component';
import { SingleFaceSnapComponent } from './face-snaps/components/single-face-snap/single-face-snap.component';
import { TrapComponent } from './trap/game1.component';
import { NewFaceSnapComponent } from './face-snaps/components/new-face-snap/new-face-snap.component';
import { CulinaireComponent } from './Culinaire/components/exp-culinaire-list/culinaire.component';
import { SingleCulinaireComponent } from './Culinaire/components/single-culinaire/single-culinaire.component';
import { GameListComponent } from './game/components/game-list/game-list.component';
import { SingleGameComponent } from './game/components/single-game/single-game.component';

const routes : Routes= [
  {path : 'destinations/create', component: NewFaceSnapComponent},
  {path : 'destinations/:id', component: SingleFaceSnapComponent },
  {path : 'destinations', component: FaceSnapListComponent },
  {path : 'game/create', component: NewFaceSnapComponent },
  {path : 'game/:id', component: SingleGameComponent },
  {path : 'game', component: GameListComponent },
  {path : 'culinaire/create', component: NewFaceSnapComponent },
  {path : 'culinaire/:id', component: SingleCulinaireComponent },
  {path : 'culinaire', component: CulinaireComponent },
  {path : '', component: LandingPageComponent },
  {path : 'trap', component: TrapComponent},


]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule {

}