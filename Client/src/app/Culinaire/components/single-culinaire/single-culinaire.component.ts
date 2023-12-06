import { Component } from '@angular/core';
import { FaceSnap } from 'src/app/core/models/face-snap.models';
import { CulinaireServices } from 'src/app/core/services/culinaire.service';
import { Observable, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FaceSnapsServices } from 'src/app/core/services/face-snap.service';


@Component({
  selector: 'app-single-culinaire',
  templateUrl: './single-culinaire.component.html',
  styleUrls: ['./single-culinaire.component.scss']
})
export class SingleCulinaireComponent {
  faceSnap$! : Observable<FaceSnap>
  buttonText!: string;

  constructor(
    private  culinaireService : CulinaireServices,
    private  faceSnapsService : FaceSnapsServices,
    private route : ActivatedRoute
    ){}

  ngOnInit() :void {
    const culinaireId = +this.route.snapshot.params['id']
    this.faceSnap$ = this.culinaireService.getculinaireById(culinaireId)
  }
  onSnap(faceSnapId: number) {
    if (this.buttonText === 'Oh Snap!') {
        this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
            tap(() => this.buttonText = 'Oops, unSnap!')
        );
    } else {
        this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
            tap(() => this.buttonText = 'Oh Snap!')
        );
    }
  }
}
