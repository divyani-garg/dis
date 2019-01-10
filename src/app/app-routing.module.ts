import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './User_Authentication/login/login.component';
import { SignUpComponent } from './User_Authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './User_Authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './User_Authentication/reset-password/reset-password.component';
import { StudentRoutingModule } from './student/student-routing.module';
import { StaffRoutingModule } from './staff/staff-routing.module';
import { FacultyRoutingModule } from './faculty/faculty-routing.module';
=======
import { LoginComponent } from './authentication/login/login.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
>>>>>>> 359a8f0ee5b2183e3f1a9a8c6f0558e37fe1204e

const routes: Routes = [
  { path: 'forgot-password',
     component: ForgotPasswordComponent
  },
  { path: 'reset-password',
     component: ResetPasswordComponent
  },
  { path: 'signup',
     component: SignUpComponent
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), StudentRoutingModule, StaffRoutingModule,FacultyRoutingModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
