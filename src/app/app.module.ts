import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './User_Authentication/authentication/authentication.component';
import { LoginComponent } from './User_Authentication/login/login.component';
import { SignUpComponent } from './User_Authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './User_Authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './User_Authentication/reset-password/reset-password.component';
import { NavigationComponent } from './student/navigation/navigation.component';
import { HomeComponent } from './student/home/home.component';
import { AboutComponent } from './student/about/about.component';
import { TimetableComponent } from './student/timetable/timetable.component';
import { AttendanceComponent } from './student/attendance/attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    TimetableComponent,
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
