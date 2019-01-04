import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from '../faculty/faculty.component';
import { StudentFourthYearProjectComponent } from './student-fourth-year-project/student-fourth-year-project.component';
import { MeProjectDetailsComponent } from './me-project-details/me-project-details.component';
import { MeSchlorshipDetailsComponent } from './me-schlorship-details/me-schlorship-details.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path : 'faculty',
    component : FacultyComponent,
    children : [
      {
        path :'student',
        component : StudentComponent,
        children:[
          {
            path : 'student_fourth_year_project',
            component : StudentFourthYearProjectComponent
          },
          {
            path : 'me_project_details',
            component : MeProjectDetailsComponent
          },
          {
            path  : 'me_schlorship_details',
            component : MeSchlorshipDetailsComponent
          },
          {
            path :'navigation',
            component : NavigationComponent
          }
        ]
      }
    ]
    }    
  ];      
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
