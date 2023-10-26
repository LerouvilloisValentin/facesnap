import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.models";

@Injectable({
  providedIn:'root'
})
export class FaceSnapsServices {
  faceSnaps : FaceSnap[] = [
    {
      id:1,
      title : 'sunset ou 107',
      description : 'Mon bestFriend',
      createdDate : new Date(),
      snaps : 25,
      imageUrl : '../assets/image/tree.jpg',
      location : "alençon",
    },

    {
        id:2,
        title :'bout de boit',
        description : 'Mon badFriend',
        createdDate : new Date(),
        snaps: 7,
        imageUrl : '../assets/image/tori.jpg',
        location : "toulouse",
    },

    {
        id:3,
        title :'ourson romantique',
        description : 'Mon bro',
        createdDate : new Date(),
        snaps: 17,
        imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',

    },
  ]

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
        throw new Error('FaceSnap not found!');
    } else {
        return faceSnap;
    }
  }
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
    const faceSnap: FaceSnap = {
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    };
    this.faceSnaps.push(faceSnap);
  }
}
