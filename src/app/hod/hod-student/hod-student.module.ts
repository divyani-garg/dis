import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HodStudentRoutingModule } from './hod-student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentMEProjectsComponent } from './student-meprojects/student-meprojects.component';
import { StudentProjectsComponent } from './student-projects/student-projects.component';
import { StudentScholarshipComponent } from './student-scholarship/student-scholarship.component';
import { HodStudentComponent } from './hod-student/hod-student.component';
import { StudentFouthyearComponent } from './student-fouthyear/student-fouthyear.component';
import { StudentFirstyearComponent } from './student-firstyear/student-firstyear.component';

@NgModule({
  imports: [
    CommonModule,
    HodStudentRoutingModule
  ],
  declarations: [StudentListComponent, StudentMEProjectsComponent, StudentProjectsComponent, StudentScholarshipComponent, HodStudentComponent, StudentFouthyearComponent, StudentFirstyearComponent]
})
export class HodStudentModule { }
