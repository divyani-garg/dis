import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AlertsComponent } from './alerts/alerts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutRoutingModule } from './about/about-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentRoutingModule } from './student/student-routing.module';
import { HomeComponent } from './home/home/home.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { ComplaintsComponent } from './complaints/complaints/complaints.component';
import { ComplaintsRoutingModule } from './complaints/complaints-routing.module';
import { DocumentsRoutingModule } from './documents/documents-routing.module';

const routes: Routes = [
  {
    path : 'faculty',
    component : FacultyComponent,
    children : [
      {
        path : 'attendance',
        component: AttendanceComponent
      },
      {
        path : 'alerts',
        component : AlertsComponent
      },
      {
        path : 'navigation',
        component : NavigationComponent
      },
      {
        path : '**',
        component : PageNotFoundComponent

      },
      
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),AboutRoutingModule,StudentRoutingModule,HomeRoutingModule,ComplaintsRoutingModule,DocumentsRoutingModule],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
