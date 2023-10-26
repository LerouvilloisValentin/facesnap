import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.scss']
})
export class LandingPageComponentComponent implements OnInit {

  userEmail! : string

  constructor(private router : Router) {}

  ngOnInit() : void {

  }

  onContinue() : void {
    this.router.navigateByUrl('facesnaps')
  }

  onSubmitForm(form : NgForm): void {
    console.log(form.value)
  }

}
