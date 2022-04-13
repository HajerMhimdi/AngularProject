import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  alert:boolean=false;

  myForm:FormGroup

  constructor( private userService: UserService,private fbuilder:FormBuilder, private route:ActivatedRoute, private router:Router) {
    
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


  ngOnInit(): void {

    let idUser = this.route.snapshot.params.id;

    console.log(idUser);

    this.userService.getUserById(idUser).subscribe(
      res=>{

      let user = res
      this.myForm.patchValue({
        firstname : user.firstname,
        lastname : user.lastname,
        email: user.email,
      })
    },
    err=>{
      console.log(err)
    }

    )
  }

  updateUser(){
    console.log(this.myForm.value)
    let data = this.myForm.value;
    let user = new User(data.firstname,data.lastname,data.email,null,data.idUser)
    this.userService.updateUser(user).subscribe(res => { 
      console.log('555555555555555', res);
      this.alert=true;

    //  this.router.navigate(['/peopleList'])

     },
      err=>{
        console.log(err)
      }
    )
  }

}
