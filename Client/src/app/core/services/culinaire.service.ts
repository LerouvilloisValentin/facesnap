import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.models";
import { HttpClient } from "@angular/common/http";
import { Observable, map, switchMap } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class CulinaireServices {
  faceSnap! : FaceSnap

  constructor(private http: HttpClient){}

  getAllCulinaire(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/culinaire')
  }

  getculinaireById(culinaireId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/culinaire/${culinaireId}`)

  }
  // snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
  //   return this.getFaceSnapById(faceSnapId).pipe(
  //     map(faceSnap => ({
  //       ...faceSnap,
  //       snaps: faceSnap.snaps + (snapType === 'snap'? 1 : -1)
  //     })),
  //     switchMap(updateFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updateFaceSnap))
  //   )
  // }


  addCulinaireExp(formValue: { title: string, description: string, imageUrl: string, location?: string }) : Observable<FaceSnap> {
   return this.getAllCulinaire().pipe(
    map(facesnaps => [...facesnaps].sort((a:FaceSnap, b: FaceSnap) => a.id - b.id)),
    map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
    map(previousFacesnaps => ({
      ...formValue,
      snaps:0,
      createdDate: new Date(),
      id: previousFacesnaps.id + 1
    })),
    switchMap(newFacesnap=> this.http.post<FaceSnap>('http://localhost:3000/culinaire', newFacesnap))
   )
  }
}
