import { Component, OnInit } from '@angular/core';
import { Observable, interval, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private router : Router
    ){

  }

  interval$!: Observable<string>;
  tableau: string[] = ["Hello tu  vas bien?", "Je suis pair", "Je suis impair"];
  currentIndex = 0;

  ngOnInit() {
    this.interval$ = interval(7000).pipe(
      map(() => {
        const currentElement = this.tableau[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.tableau.length;
        return currentElement;
      })
    );
  }

  onViewFaceSnap(){
    this.router.navigateByUrl("/")
  }
}
