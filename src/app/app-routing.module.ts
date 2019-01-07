import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';

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
  { path: '', 
    component: LoginComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
