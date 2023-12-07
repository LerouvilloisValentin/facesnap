import { Component, OnInit} from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.models';
import { FaceSnapsServices } from '../../../core/services/face-snap.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';


@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap$! : Observable<FaceSnap>
  buttonText!: string;

  constructor(
    private faceSnapsService : FaceSnapsServices,
    private route : ActivatedRoute
    ){}

  ngOnInit() {
    this.buttonText= 'DarkMode'
    const faceSnapId = +this.route.snapshot.params['id']
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId)
  }
  // onSnap(faceSnapId: number) {
  //   if (this.buttonText === 'DarkMode') {
  //       this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
  //           tap(() => this.buttonText = 'GreenMode')
  //       );
  //   } else {
  //       this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
  //           tap(() => this.buttonText = 'DarkMode')
  //       );
  //   }
  // }
}