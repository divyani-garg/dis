import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HodStudentComponent } from './hod-student/hod-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HodComponent } from '../hod/hod.component';
import { StudentMEProjectsComponent } from './student-meprojects/student-meprojects.component';
import { StudentScholarshipComponent } from './student-scholarship/student-scholarship.component';
import { StudentFirstyearComponent } from './student-firstyear/student-firstyear.component';
import { StudentProjectsComponent } from './student-projects/student-projects.component';
import { StudentFouthyearComponent } from './student-fouthyear/student-fouthyear.component';
const routes: Routes = [
  { 
    path: 'hod',
    component: HodComponent,
    children: [
      {
        path: 'hod-student',
        component: HodStudentComponent,
        children:[
          {
            path: '',
            component: StudentListComponent
          },
          {
            path: 'student-meprojects',
            component: StudentMEProjectsComponent
          },
          {
            path: 'student-scholarship',
            component: StudentScholarshipComponent
          },
          {
            path: 'student-firstyear',
            component: StudentFirstyearComponent
          },
          {
            path: 'student-fouthyear',
            component: StudentFouthyearComponent
          },
          {
            path: 'student-project',
            component: StudentProjectsComponent
          }
        ]
      },
     
    ]
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HodStudentRoutingModule { }
