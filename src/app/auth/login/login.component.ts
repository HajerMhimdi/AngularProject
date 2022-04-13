import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../user';
import { UserService } from '../../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm:FormGroup

  constructor(private fbuilder:FormBuilder,private userService: UserService,private router:Router) {


    let formControls ={
    
      email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  
      password: new FormControl('',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    }
  
    this.myForm= this.fbuilder.group(formControls);
  }


  //
get Email(){
  return this.myForm.get('email')
}

get Password(){
  return this.myForm.get('password')
}




  ngOnInit(): void {
    let isLoggedIn = this.userService.isLoggedIn();
    if(isLoggedIn){
      this.router.navigate(['home'])

    }
  }

  login(){
    let data = this.myForm.value;
    let user = new User(null,null,data.email, data.password);
    console.log(user);
    this.userService.loginAdmin(user).subscribe(
      res=>{
        console.log(res);
        let token = res.token;
        localStorage.setItem("myToken",token)
      this.router.navigate(['home'])

      },
      err=>{
        console.log(err)
      }
    )
  }
  

}
