import { Component } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title="Mon Application"

 
  onActive(){
    window.scroll(0,0);
  }



/*query params*/
constructor() { }

ngOnInit(): void {
}


  
}
