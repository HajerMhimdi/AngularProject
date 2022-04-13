import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("myToken");
    this.router.navigate(['login']);
  }
}
