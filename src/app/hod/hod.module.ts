import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HodRoutingModule } from './hod-routing.module';
import { HomeComponent } from './home/home.component';
import { AdministrationComponent } from './administration/administration.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FacultyComponent } from './faculty/faculty.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { RequestsComponent } from './requests/requests.component';
import { AlertsComponent } from './alerts/alerts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HodComponent } from './hod/hod.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { CalendarComponent } from '../miscellaneous/calendar/calendar.component';
import { HodStudentModule } from './hod-student/hod-student.module';
import { DocumentsModule } from './documents/documents.module';

@NgModule({
  imports: [
    CommonModule,
    HodRoutingModule,
    HodStudentModule,
    DocumentsModule
  ],
  declarations: [
     HomeComponent,
     AdministrationComponent, 
     TimetableComponent, 
     FacultyComponent, 
     InfrastructureComponent,
     RequestsComponent, 
     AlertsComponent, 
     NavigationComponent, 
     HodComponent, 
     SidenavigationComponent,
     CalendarComponent],
     providers: [CalendarComponent],
     exports:[
       NavigationComponent
     ]
 
})
export class HodModule { }
