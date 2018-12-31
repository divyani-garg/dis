import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentRollListComponent } from './student-roll-list/student-roll-list.component';
import { StudentFourthYearProjectComponent } from './student-fourth-year-project/student-fourth-year-project.component';
import { MeProjectDetailsComponent } from './me-project-details/me-project-details.component';
import { MeSchlorshipDetailsComponent } from './me-schlorship-details/me-schlorship-details.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [StudentRollListComponent, StudentFourthYearProjectComponent, MeProjectDetailsComponent, MeSchlorshipDetailsComponent]
})
export class StudentModule { }
