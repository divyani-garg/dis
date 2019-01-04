import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDutiesRoutingModule } from './my-duties-routing.module';
import { ClassTimeTableComponent } from './class-time-table/class-time-table.component';
import { QuizTimeTableComponent } from './quiz-time-table/quiz-time-table.component';
import { MidtermTimeTableComponent } from './midterm-time-table/midterm-time-table.component';
import { IndustrialVisitComponent } from './industrial-visit/industrial-visit.component';
import { ExpertLectureComponent } from './expert-lecture/expert-lecture.component';
import { MarkAttendanceComponent } from './mark-attendance/mark-attendance.component';
import { MyDutiesComponent } from './my-duties/my-duties.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    MyDutiesRoutingModule
  ],
  declarations: [ClassTimeTableComponent, QuizTimeTableComponent, MidtermTimeTableComponent, IndustrialVisitComponent, ExpertLectureComponent, MarkAttendanceComponent, MyDutiesComponent, NavigationComponent]
})
export class MyDutiesModule { }
