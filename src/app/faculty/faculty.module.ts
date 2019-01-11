import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { AttendanceComponent } from './attendance/attendance.component';
import { AlertsComponent } from './alerts/alerts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HomeModule } from './home/home.module';
import { ComplaintsModule } from './complaints/complaints.module';
import { SidenavigationComponent } from '../faculty/sidenavigation/sidenavigation.component';
import { MydutiesModule } from './myduties/myduties.module';
import { DocumentsComponent } from './documents/documents.component';
import { MiscellaneousModule } from 'src/app/miscellaneous/miscellaneous.module';
import { FacultyProfileComponent } from './faculty-profile/faculty-profile.component';

@NgModule({
  imports: [
    CommonModule,
    FacultyRoutingModule,
    HomeModule,
    ComplaintsModule,
    MydutiesModule,
    MiscellaneousModule
   ],
  declarations: [AttendanceComponent, AlertsComponent, NavigationComponent, 
    FacultyComponent,SidenavigationComponent, DocumentsComponent, FacultyProfileComponent
    ] 
})
export class FacultyModule { }
