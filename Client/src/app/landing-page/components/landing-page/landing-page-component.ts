import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FooterComponent } from 'src/app/footer/footer.component';


@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.html', 
  styleUrls: ['./landing-page-component.scss']
})
export class LandingPageComponent implements OnInit {

  userEmail! : string

  constructor(private router : Router) {}

  ngOnInit() : void {

  }

  onContinue() : void {
    this.router.navigateByUrl('destinations')
  }

  onClickMenuDestination() : void {
    this.router.navigateByUrl('destinations')
  }

  onClickMenuCulinaire() : void {
    this.router.navigateByUrl('culinaire')
  }

  onClickMenuGame() : void {
    this.router.navigateByUrl('game')
  }

  onSubmitForm(form : NgForm): void {
    console.log(form.value)
  }

}
