import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { AttendanceComponent } from './attendance/attendance.component';
import { AlertsComponent } from './alerts/alerts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FacultyComponent } from './faculty/faculty.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutRoutingModule } from './about/about-routing.module';
import { StudentRoutingModule } from './student/student-routing.module';
import { StudentModule } from '../faculty/student/student.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { ComplaintsModule } from './complaints/complaints.module';
import { DocumentsModule } from './documents/documents.module';
import { SidenavigationComponent } from '../faculty/sidenavigation/sidenavigation.component';
import { MydutiesModule } from './myduties/myduties.module';
import { StudentRollListModule } from './student/student-roll-list/student-roll-list.module';

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
    DocumentsModule,
    MydutiesModule,
   ],
  declarations: [AttendanceComponent, AlertsComponent, NavigationComponent, 
    FacultyComponent, PageNotFoundComponent,SidenavigationComponent
    ] 
})
export class FacultyModule { }
