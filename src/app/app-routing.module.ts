import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: '/login' }, 
  {path:'login',component:LoginComponent },
  {path:'register',component:RegisterComponent},
  {path:'home', component:HomeComponent},

    {path:'about',component:AboutComponent},
    {path:'peopleList',component:PeopleListComponent},

    {path:'profile',component:ProfileComponent},

  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
