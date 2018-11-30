import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';


@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class StudentModule { }
