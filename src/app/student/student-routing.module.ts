import { AboutModule } from './../about/about.module';
import { AboutComponent } from './../about/about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradesComponent } from './grades/grades.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { TimetableComponent } from './timetable/timetable.component';

const routes: Routes = [
  { path: 'student',
    component: StudentComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'student_home',
        component: HomeComponent
      },
      {
        path: 'student_about',
        component: AboutComponent,
        loadChildren: () => AboutModule
      },
      {
        path: 'student_attendance',
        component: AttendanceComponent
      },
      {
        path: 'student_timetable',
        component: TimetableComponent
      },
      {
        path: 'student_grades',
        component: GradesComponent,
      },
      {
        path: 'student_complaints',
        component: ComplaintsComponent
      },
      {
        path: 'student_assignments',
        component: AssignmentsComponent
      },
      {
        path: 'student_alerts',
        component: AlertsComponent
      },
      {
        path: 'student_profile',
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
