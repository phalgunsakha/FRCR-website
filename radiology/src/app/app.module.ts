import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ExamPanelComponent } from './components/exam-panel/exam-panel.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupFormComponent,
    ForgetPasswordComponent,
    NotFoundComponent,
    DashboardComponent,
    LoadingComponent,
    ExamPanelComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
