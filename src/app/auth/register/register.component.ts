import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../user';
import { UserService } from '../../user.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
alert:Boolean=false;
  myForm:FormGroup

  constructor(private fbuilder:FormBuilder,private userService: UserService, private router:Router) {


    let formControls ={

      firstname: new FormControl('',[Validators.required, Validators.pattern("[a-z.'-]+"),Validators.minLength(3),Validators.maxLength(16)]),
      lastname: new FormControl('',[Validators.required, Validators.pattern("[a-z.'-]+"),Validators.minLength(3),Validators.maxLength(16)]),
  
    
      email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  
      password: new FormControl('',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
     confirmpassword: new FormControl('',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),

    }
  
    this.myForm= this.fbuilder.group(formControls);
  }

  //
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

get Password(){
  return this.myForm.get('password')
}


get ConfirmPassword(){
  return this.myForm.get('confirmpassword')
}




  ngOnInit(): void {
    let isLoggedIn = this.userService.isLoggedIn();
    if(isLoggedIn){
      this.router.navigate(['home'])

    }
  }

  register(){
    let data = this.myForm.value;
    let user = new User(data.firstname,data.lastname, data.email, data.password);
   this.userService.registerAdmin(user).subscribe(
     res=>{
this.alert=true

     },
     err=>{
       console.log(err, "repeted email")
     }
   )
  }

}
