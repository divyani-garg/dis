import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HodComponent } from './hod/hod.component';
import { HomeComponent } from './home/home.component';
import { AdministrationComponent } from './administration/administration.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HodStudentModule } from './hod-student/hod-student.module';
import { DocumentsRoutingModule } from './documents/documents-routing.module';
import { RequestsComponent } from './requests/requests.component';
import { TimetableComponent } from './timetable/timetable.component';
import { AlertsComponent } from './alerts/alerts.component';
const routes: Routes = [
  { path: 'hod',
    component: HodComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'hod_tasks',
        component: AdministrationComponent
      },
      {
        path: 'faculty',
        component: FacultyComponent
      },
      {
        path: 'requests',
        component: RequestsComponent
      },
      {
        path: 'timetable',
        component: TimetableComponent
      },
      {
        path: 'alerts',
        component: AlertsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HodRoutingModule { }
