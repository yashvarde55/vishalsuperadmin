import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetComponent } from './components/forget/forget.component';


const routes: Routes = [
  {
    path:'',redirectTo:'/sign-in',pathMatch:'full'
  },
  {
    path:'sign-in',component:SignInComponent
  },
  {path:'sign-up',component:SignUpComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'forget',component:ForgetComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
