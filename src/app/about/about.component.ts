import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  info = {
    nom: "sonia",
    email: "sonia04@gmail.com",
    tel: 28282828
  }

  comments = [
    { date: new Date(), message: "A" },
    { date: new Date(), message: "B" },
    { date: new Date(), message: "C" }
  ]

  /*  exemple *ngIf */

  verif = true
  x = 5
  y = 5

  /*  exemple *ngFor */

dataArray =["tunisia", "egypte", "morroco"]



  constructor() { }

  ngOnInit(): void {
  }

}
