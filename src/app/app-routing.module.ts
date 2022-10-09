import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExamPanelComponent } from './components/exam-panel/exam-panel.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

const routes: Routes = [
  {path:'',component:SignupFormComponent},
  {path:'login',component:LoginComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path: 'loading', component:LoadingComponent},
  {path:'exam-panel',component:ExamPanelComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
