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
import { StudentRoutingModule } from './student/student-routing.module';
import { StudentModule } from '../faculty/student/student.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { ComplaintsModule } from './complaints/complaints.module';
import { DocumentsModule } from './documents/documents.module';


@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    FacultyRoutingModule,
    StudentRoutingModule,
    AboutModule,
    StudentModule,
    HomeModule,
    ComplaintsModule,
    DocumentsModule
  ],
  declarations: [AttendanceComponent, AlertsComponent, NavigationComponent, 
    FacultyComponent, SideNavigationComponent, PageNotFoundComponent, 
    ]
})
export class FacultyModule { }
