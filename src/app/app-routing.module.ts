import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './auth/login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PeopleListComponent} from './people-list/people-list.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './auth/register/register.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate:[AuthGuard],
    },
    {
        path: 'peopleList',
        component: PeopleListComponent,
        canActivate:[AuthGuard]
    }, {
        path: 'profile',
        component: ProfileComponent,
        canActivate:[AuthGuard]
    }, {
        path: 'updateUser/:id',
        component: AboutComponent,
        canActivate:[AuthGuard]
    }, {
        path: '**',
        component: PageNotFoundComponent
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
