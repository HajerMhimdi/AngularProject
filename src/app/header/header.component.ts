import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  x=200
  title="Mon Application"

 UserName={
    name:"Hajer",
    
  }

  onActive(){
    window.scroll(0,0);
  }



  /* pipe */
date= new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
