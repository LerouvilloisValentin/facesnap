import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { Game1Component } from './game1/game1.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';

const routes : Routes= [
  {path : 'facesnaps/:id', component: SingleFaceSnapComponent },
  {path : 'facesnaps', component: FaceSnapListComponent },
  {path : '', component: LandingPageComponentComponent },
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