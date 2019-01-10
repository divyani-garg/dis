import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD:src/app/User_Authentication/sign-up/sign-up.component.ts
import { StudentSignUp } from '../../Model/student-sign-up.model';
import { StudentSignUpService } from '../../API_Service/student-sign-up.service';
=======
import { Authentication } from '../../model/authentication.model';
import { AuthenticationService } from '../../API_service/authentication.service';
>>>>>>> 359a8f0ee5b2183e3f1a9a8c6f0558e37fe1204e:src/app/authentication/sign-up/sign-up.component.ts

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
<<<<<<< HEAD:src/app/User_Authentication/sign-up/sign-up.component.ts
export class SignUpComponent implements OnInit {
  studentSignUp: StudentSignUp = new StudentSignUp();
=======
export class SignUpComponent implements OnInit 
{
  auth: Authentication = new Authentication();
>>>>>>> 359a8f0ee5b2183e3f1a9a8c6f0558e37fe1204e:src/app/authentication/sign-up/sign-up.component.ts
  submitted = false;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  newauth(): void {
    this.submitted = false;
    this.auth = new Authentication();
  }

  save() {
    this.authService.signup(this.auth)
      .subscribe(data => console.log(data), error => console.log(error));
    this.auth = new Authentication();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
