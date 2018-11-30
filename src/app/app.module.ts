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
<<<<<<< HEAD
import { GradesComponent } from './student/grades/grades.component';
import { AlertsComponent } from './student/alerts/alerts.component';
import { AssignmentsComponent } from './student/assignments/assignments.component';
import { ComplaintsComponent } from './student/complaints/complaints.component';
import { ProfileComponent } from './student/profile/profile.component';
=======
import { HomeComponent } from './student/home/home.component';
import { AboutComponent } from './student/about/about.component';
import { TimetableComponent } from './student/timetable/timetable.component';
import { AttendanceComponent } from './student/attendance/attendance.component';
>>>>>>> e5878edbcc2973b17da6409927c2c106dcabd182

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    NavigationComponent,
<<<<<<< HEAD
    GradesComponent,
    AlertsComponent,
    AssignmentsComponent,
    ComplaintsComponent,
    ProfileComponent
=======
    HomeComponent,
    AboutComponent,
    TimetableComponent,
    AttendanceComponent
>>>>>>> e5878edbcc2973b17da6409927c2c106dcabd182
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
