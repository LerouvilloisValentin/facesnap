import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.models";
import { HttpClient } from "@angular/common/http";
import { Observable, map, switchMap } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class FaceSnapsServices {
  faceSnap! : FaceSnap

  constructor(private http: HttpClient){}

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps')
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)

  }
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap'? 1 : -1)
      })),
      switchMap(updateFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updateFaceSnap))
    )
  }


  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
    // const faceSnap: FaceSnap = {
    //     ...formValue,
    //     snaps: 0,
    //     createdDate: new Date(),
    //     id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    // };
    // this.faceSnaps.push(faceSnap);
  }
}
