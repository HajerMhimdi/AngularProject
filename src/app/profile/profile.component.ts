import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

alert:boolean=false;
  myForm: FormGroup


  constructor(private fbuilder: FormBuilder, private userService: UserService, private router:Router) {


    let formControls = {
      firstname: new FormControl('', [Validators.required, Validators.pattern("[a-z.'-]+"), Validators.minLength(3), Validators.maxLength(16)]),
      lastname: new FormControl('', [Validators.required, Validators.pattern("[a-z.'-]+"), Validators.minLength(3), Validators.maxLength(16)]),

      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    }

    this.myForm = this.fbuilder.group(formControls);
  }

  get firstName() {
    return this.myForm.get('firstname')
  }
  //
  get lastName() {
    return this.myForm.get('lastname')
  }
  //
  get Email() {
    return this.myForm.get('email')
  }

  get Password() {
    return this.myForm.get('password')
  }

  ngOnInit(): void {
  }

  addUser() {

    let data = this.myForm.value
    let user = new User(data.firstname, data.lastname, data.email, data.password)
    this.userService.addUser(user).subscribe(

      res => {
          console.log(res);
this.alert=true;

      },
      err => {
        console.log(err);
      })
  }



}
