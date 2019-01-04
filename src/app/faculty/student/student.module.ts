import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentFourthYearProjectComponent } from './student-fourth-year-project/student-fourth-year-project.component';
import { MeProjectDetailsComponent } from './me-project-details/me-project-details.component';
import { MeSchlorshipDetailsComponent } from './me-schlorship-details/me-schlorship-details.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [StudentFourthYearProjectComponent, MeProjectDetailsComponent, MeSchlorshipDetailsComponent, NavigationComponent, StudentComponent]
})
export class StudentModule { }
