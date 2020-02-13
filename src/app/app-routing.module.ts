import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetComponent } from './components/forget/forget.component';
import { TemplateWithSidebarComponent } from './templates/template-with-sidebar/template-with-sidebar.component';


const routes: Routes = [
  {
    path:'',redirectTo:'/sign-in',pathMatch:'full'
  },
  {
    path:'sign-in',
    component:SignInComponent
  },
  {path:'sign-up',component:SignUpComponent},
  {path:'forget',component:ForgetComponent},
  {
    path: '',
    component: TemplateWithSidebarComponent,
    children: [
      {path:'dashboard',component:DashboardComponent},     
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
