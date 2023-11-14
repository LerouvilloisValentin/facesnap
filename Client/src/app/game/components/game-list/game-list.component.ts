import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.models';
import { GameServices } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent {
  faceSnaps$! : Observable<FaceSnap[]>

  constructor(private gameService : GameServices) {}

  ngOnInit() :void {
    this.faceSnaps$ = this.gameService.getAllGame()
  }
}
