import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { AttendanceComponent } from './attendance/attendance.component';
import { AlertsComponent } from './alerts/alerts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FacultyComponent } from './faculty/faculty.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutRoutingModule } from './about/about-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    FacultyRoutingModule,
  ],
  declarations: [AttendanceComponent, AlertsComponent, NavigationComponent, FacultyComponent, SideNavigationComponent, PageNotFoundComponent]
})
export class FacultyModule { }
