import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetComponent } from './components/forget/forget.component';
import { TemplateWithSidebarComponent } from './templates/template-with-sidebar/template-with-sidebar.component';
import { SocietyComponent } from './components/society/society.component';
import { SocietyformComponent } from './components/societyform/societyform.component';
import { AuthGuard } from './auth.guard';


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
      {path:'society',component:SocietyComponent},
      {path:'societyform/:id',component:SocietyformComponent}  
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
