import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.models';
import { FaceSnapsServices } from '../../../core/services/face-snap.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap! : FaceSnap
  buttonText!: string;

  constructor(private faceSnapsService : FaceSnapsServices,
    private route : ActivatedRoute,
    private router : Router
    ){

  }

  ngOnInit() {

    this.buttonText= 'Oh Snap!'
  }
//   onSnap() {
//     if (this.buttonText === 'Oh Snap!') {
//         this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
//         this.buttonText = 'Oops, unSnap!';
//     } else {
//         this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
//         this.buttonText = 'Oh Snap!';
//     }
// }

onViewFaceSnap(){
    const currentUrl = this.router.url
    if ( currentUrl === "/destinations"){
      this.router.navigateByUrl(`destinations/${this.faceSnap.id}`)
    } else if ( currentUrl === "/culinaire"){
      this.router.navigateByUrl(`culinaire/${this.faceSnap.id}`)
    } else if ( currentUrl === "/game"){
      this.router.navigateByUrl(`game/${this.faceSnap.id}`)
    }
  }
}