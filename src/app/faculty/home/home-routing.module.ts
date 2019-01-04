import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from '../faculty/faculty.component';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { MyDutiesModule } from './my-duties/my-duties.module';
import { HomeFacultyComponent } from './home-faculty/home-faculty.component';

const routes: Routes = [
  {
    path : 'faculty',
    component : FacultyComponent,
    children:[
      {
        path : 'home',
        component : HomeComponent,
        children : [
          {
            path : '',
            component : HomeFacultyComponent
          },
          {
            path : 'home_faculty',
            component : HomeFacultyComponent
          },
          {
            path  : 'notification',
            component : NotificationComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),MyDutiesModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
