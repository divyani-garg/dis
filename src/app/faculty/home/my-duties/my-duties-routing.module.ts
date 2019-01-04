import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from '../../faculty/faculty.component';
import { HomeComponent } from '../home/home.component';
import { MyDutiesComponent } from './my-duties/my-duties.component';
import { ClassTimeTableComponent } from './class-time-table/class-time-table.component';
import { ExpertLectureComponent } from './expert-lecture/expert-lecture.component';
import { IndustrialVisitComponent } from './industrial-visit/industrial-visit.component';
import { MarkAttendanceComponent } from './mark-attendance/mark-attendance.component';
import { MidtermTimeTableComponent } from './midterm-time-table/midterm-time-table.component';
import { QuizTimeTableComponent } from './quiz-time-table/quiz-time-table.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    path : 'faculty',
    component : FacultyComponent,
    children : [
      {
        path  : 'home',
        component : HomeComponent,
        children : [
          {
            path : 'my_duties',
            component : MyDutiesComponent,
            children : [
              {
                path  : '',
                component : ClassTimeTableComponent
              },
              {
                path : 'class_time_table',
                component : ClassTimeTableComponent
              },
              {
                path  : 'expert_lecture',
                component : ExpertLectureComponent
              },
              {
                path  : 'industrial_visit',
                component : IndustrialVisitComponent
              },
              {
                path  : 'mark_attendance',
                component  : MarkAttendanceComponent
              },
              {
                path  : 'midterm_time_table',
                component : MidtermTimeTableComponent
              },
              {
                path : 'quiz_time_table',
                component : QuizTimeTableComponent
              },
              {
                path : 'navigation',
                component : NavigationComponent
              }
            ]
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
export class MyDutiesRoutingModule { }
