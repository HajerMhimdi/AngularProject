import{ HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({ providedIn:'root'})

export class UserService {
  constructor(private http:HttpClient){}

private UsersUrl="https://backend-people-crud-app.herokuapp.com/users";
//private getByIdUsersUrl="https://backend-people-crud-app.herokuapp.com/users/";

//private deleteUsersUrl="https://backend-people-crud-app.herokuapp.com/users/";
//private addUsersUrl="https://backend-people-crud-app.herokuapp.com/users/add";
//private updateUsersUrl="https://backend-people-crud-app.herokuapp.com/users/update";



  //Api get all User

  getAllUsers(){
    let data = this.http.get<any>(this.UsersUrl)
return data;
  }

    //Api get user by id

getUserById(id:String){
  return this.http.get<any>(this.UsersUrl+"/"+id)
}



  //Api delete user by id

  deleteIdUser(id:String){
   return this.http.delete<any>(this.UsersUrl+"/"+id)
    
  }

  // Api post user (adding user)

 addUser(user:User){
  return this.http.post<any>(this.UsersUrl+"/add", user)

  }

   // Api put user (adding user)

 updateUser(user:User){
  return this.http.put<any>(this.UsersUrl+"/update", user)

  }

     // Api Register 

     registerAdmin(user:User){
      return this.http.post<any>(this.UsersUrl+"/register", user)

     }
   // Api Login

   loginAdmin(user:User){
    return this.http.post<any>(this.UsersUrl+"/login", user)

   }

   // athentication

   isLoggedIn(){

    let token = localStorage.getItem("myToken");

    if(token) {
      return true;
    } else{
      return false;
    }
   }
  }
