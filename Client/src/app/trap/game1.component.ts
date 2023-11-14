import { Component, OnInit } from '@angular/core';
import { Observable, interval, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.scss']
})
export class TrapComponent {

  constructor(
    private route : ActivatedRoute,
    private router : Router
    ){

  }

  interval$!: Observable<string>;
  tableau: string[] = ["Ho Ho Ho !! Tu te retrouve bloqué ici",
   "Je te donne un indice pour t'en sortir mais il va falloir se remonter les manches si tu comptes t'en sortir à la fin ",
    "15",
    "C'est nul de ma part, les vrais indices se trouve dans le premier indice."

    ];
  currentIndex = 0;

  ngOnInit() {
    this.interval$ = interval(5000).pipe(
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