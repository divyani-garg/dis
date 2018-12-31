import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AlertsComponent } from './alerts/alerts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutRoutingModule } from './about/about-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about/about.component';
import { OverviewComponent } from './about/overview/overview.component';

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
  imports: [RouterModule.forChild(routes),AboutRoutingModule],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
