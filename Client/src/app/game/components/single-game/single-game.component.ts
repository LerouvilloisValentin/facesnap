import { Component } from '@angular/core';
import { FaceSnap } from 'src/app/core/models/face-snap.models';
import { Observable, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GameServices } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.scss']
})
export class SingleGameComponent {
  faceSnap$! : Observable<FaceSnap>

  constructor(
    private  gameServices : GameServices,
    private route : ActivatedRoute
    ){}

  ngOnInit() :void {
    const gameId = +this.route.snapshot.params['id']
    this.faceSnap$ = this.gameServices.getGameById(gameId)
  }
}
