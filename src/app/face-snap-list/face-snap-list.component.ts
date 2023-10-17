import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsServices } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent {
  faceSnaps! : FaceSnap[]

  constructor(private faceSnapsService:FaceSnapsServices) {}

  ngOnInit():void{
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();

    }
}
