import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFromMenuExampleComponent } from './components/dialog-from-menu-example/dialog-from-menu-example.component';
import { Router, NavigationExtras } from "@angular/router";
import { UserService } from '../user.service'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})

export class PeopleListComponent implements OnInit {
  myForm:FormGroup

  constructor(public dialog: MatDialog, private userService: UserService,private fbuilder:FormBuilder) {
    let formControls ={
      firstname: new FormControl('',[Validators.required, Validators.pattern("[a-z.'-]+"),Validators.minLength(3),Validators.maxLength(16)]),
      lastname: new FormControl('',[Validators.required, Validators.pattern("[a-z.'-]+"),Validators.minLength(3),Validators.maxLength(16)]),
  
      email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  
    }
  
    this.myForm= this.fbuilder.group(formControls);
  }
  
  get firstName(){
    return this.myForm.get('firstname')
  }
  //
  get lastName(){
    return this.myForm.get('lastname')
  }
  //
  get Email(){
    return this.myForm.get('email')
  }


   

  @ViewChild(DialogFromMenuExampleComponent) child;


  users = []

  alertDialogue() {
    const dialogRef = this.dialog.open(DialogFromMenuExampleComponent, { restoreFocus: false });
    this.users = this.child.users
    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
  }

  delete(user) {
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);

    this.userService.deleteIdUser(user._id).subscribe(
      res =>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
 }



  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      result => {
        this.users = result;
      },
      error => {
        console.log(error);
      }

    )
    
  }


  

}


