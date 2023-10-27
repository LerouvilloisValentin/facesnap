import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, interval, map, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsServices } from '../services/face-snap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {
  snapForm! : FormGroup;
  urlRegex!: RegExp;
  faceSnapPreview$! : Observable <FaceSnap>

  constructor(private formBuilder : FormBuilder,
              private faceSnapsServices : FaceSnapsServices,
              private router : Router
  ) {

  }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null ,Validators.required, Validators.pattern(this.urlRegex)],
      location: [null]
    },
    {
      updateOn : 'blur'
    })
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate : new Date(),
        id: 0,
        snaps:0
      }))
    )
  }

  onSubmitForm(): void {
    this.faceSnapsServices.addFaceSnap(this.snapForm.value).pipe(
      tap(()=> this.router.navigateByUrl("/facesnaps"))
      ).subscribe()

  }
}
