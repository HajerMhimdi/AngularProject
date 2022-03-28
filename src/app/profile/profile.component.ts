import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, OnInit } from '@angular/core';
import {AutofillMonitor} from '@angular/cdk/text-field';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  firstName=""
  lastName=""
  age=""
country=""
fonction=""




/*query params*/

constructor(private route:ActivatedRoute){
  this.route.queryParams.subscribe(data=>{
    console.log(data.firstName)
    this.firstName=data.firstName

    console.log(data.lastName)
    this.lastName=data.lastName

    console.log(data.age)
    this. age=data.age

    console.log(data.country)
    this.country=data.country

    console.log(data.fonction)
    this.fonction=data.fonction
  })
}


ngOnInit(): void {
}


  
}
