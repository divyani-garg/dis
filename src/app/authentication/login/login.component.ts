import { Component, OnInit } from '@angular/core';
import { Authentication } from '../../Model/authentication.model';
import { AuthenticationService } from '../../API_Service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authentication: Authentication = new Authentication();
  submitted = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  newStudent(): void{
    this.submitted = false;
    this.authentication = new Authentication();
  }

  save(){
    console.log(this.authentication.username);
    this.authenticationService.login(this.authentication)
    .subscribe(data => console.log(data), error => console.log(error));
    this.authentication = new Authentication();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}