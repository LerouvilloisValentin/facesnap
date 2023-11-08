import { Component } from '@angular/core';
import { FaceSnap } from 'src/app/core/models/face-snap.models';
import { CulinaireServices } from 'src/app/core/services/culinaire.service';
import { Observable, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-culinaire',
  templateUrl: './single-culinaire.component.html',
  styleUrls: ['./single-culinaire.component.scss']
})
export class SingleCulinaireComponent {
  faceSnap$! : Observable<FaceSnap>

  constructor(
    private  culinaireService : CulinaireServices,
    private route : ActivatedRoute
    ){}

  ngOnInit() :void {
    const culinaireId = +this.route.snapshot.params['id']
    this.faceSnap$ = this.culinaireService.getculinaireById(culinaireId)
  }
}
