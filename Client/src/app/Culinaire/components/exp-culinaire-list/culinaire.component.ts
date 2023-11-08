import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.models';
import { CulinaireServices } from '../../../core/services/culinaire.service';

@Component({
  selector: 'app-exp-culinaire',
  templateUrl: './culinaire.component.html',
  styleUrls: ['./culinaire.component.scss']
})
export class CulinaireComponent {
  faceSnaps$! : Observable<FaceSnap[]>

  constructor(private culinaireService : CulinaireServices) {}

  ngOnInit() :void {
    this.faceSnaps$ = this.culinaireService.getAllCulinaire()
  }
}
