import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FaceSnapListComponent } from './face-snaps/components/face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page-component';
import { SingleFaceSnapComponent } from './face-snaps/components/single-face-snap/single-face-snap.component';
import { Game1Component } from './game1/game1.component';
import { NewFaceSnapComponent } from './face-snaps/components/new-face-snap/new-face-snap.component';
import { CulinaireComponent } from './Culinaire/components/exp-culinaire-list/culinaire.component';
import { SingleCulinaireComponent } from './Culinaire/components/single-culinaire/single-culinaire.component';

const routes : Routes= [
  {path : 'facesnaps/:id', component: SingleFaceSnapComponent },
  {path : 'facesnaps', component: FaceSnapListComponent },
  {path : 'culinaire/:id', component: SingleCulinaireComponent },
  {path : 'culinaire', component: CulinaireComponent },
  {path : '', component: LandingPageComponent },
  {path : 'game', component: Game1Component},
  {path : 'create', component: NewFaceSnapComponent}


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