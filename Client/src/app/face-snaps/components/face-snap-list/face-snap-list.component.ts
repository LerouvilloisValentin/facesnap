import { Component } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.models';
import { FaceSnapsServices } from '../../../core/services/face-snap.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent {

  faceSnaps$! : Observable<FaceSnap[]>


  constructor(private faceSnapsService:FaceSnapsServices) {}

  ngOnInit():void{

    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps()
    }
}
